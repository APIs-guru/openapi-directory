import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsMembershipsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    membershipId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsMembershipsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsCreateRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsCreatePathParams;
    queryParams: GkehubProjectsLocationsMembershipsCreateQueryParams;
    request?: shared.MembershipInput;
    security: GkehubProjectsLocationsMembershipsCreateSecurity;
}
export declare class GkehubProjectsLocationsMembershipsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
