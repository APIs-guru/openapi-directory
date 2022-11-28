import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsSourcesFindingsSetStatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsSourcesFindingsSetStateQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsSourcesFindingsSetStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsSourcesFindingsSetStateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsSourcesFindingsSetStatePathParams;
    queryParams: SecuritycenterProjectsSourcesFindingsSetStateQueryParams;
    request?: shared.SetFindingStateRequest;
    security: SecuritycenterProjectsSourcesFindingsSetStateSecurity;
}
export declare class SecuritycenterProjectsSourcesFindingsSetStateResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
}
