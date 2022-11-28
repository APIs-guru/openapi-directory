import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsFleetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsFleetsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsFleetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsFleetsCreateRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsFleetsCreatePathParams;
    queryParams: GkehubProjectsLocationsFleetsCreateQueryParams;
    request?: shared.FleetInput;
    security: GkehubProjectsLocationsFleetsCreateSecurity;
}
export declare class GkehubProjectsLocationsFleetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
