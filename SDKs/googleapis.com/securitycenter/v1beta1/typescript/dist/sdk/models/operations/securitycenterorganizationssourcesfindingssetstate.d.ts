import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesFindingsSetStatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsSetStateQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesFindingsSetStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesFindingsSetStateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesFindingsSetStatePathParams;
    queryParams: SecuritycenterOrganizationsSourcesFindingsSetStateQueryParams;
    request?: shared.SetFindingStateRequest;
    security: SecuritycenterOrganizationsSourcesFindingsSetStateSecurity;
}
export declare class SecuritycenterOrganizationsSourcesFindingsSetStateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudSecuritycenterV1beta1Finding?: shared.GoogleCloudSecuritycenterV1beta1Finding;
    statusCode: number;
}
