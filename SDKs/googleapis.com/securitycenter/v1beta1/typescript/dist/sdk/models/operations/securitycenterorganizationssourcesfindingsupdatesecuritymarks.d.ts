import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams;
    queryParams: SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksQueryParams;
    request?: shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
    security: SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksSecurity;
}
export declare class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudSecuritycenterV1beta1SecurityMarks?: shared.GoogleCloudSecuritycenterV1beta1SecurityMarks;
    statusCode: number;
}
