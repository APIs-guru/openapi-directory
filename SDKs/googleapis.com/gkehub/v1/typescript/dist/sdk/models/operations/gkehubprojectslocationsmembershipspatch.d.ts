import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkehubProjectsLocationsMembershipsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsMembershipsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsPatchRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsPatchPathParams;
    queryParams: GkehubProjectsLocationsMembershipsPatchQueryParams;
    request?: shared.MembershipInput;
    security: GkehubProjectsLocationsMembershipsPatchSecurity;
}
export declare class GkehubProjectsLocationsMembershipsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
