import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingProjectsGetBillingInfoPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbillingProjectsGetBillingInfoQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingProjectsGetBillingInfoSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingProjectsGetBillingInfoSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingProjectsGetBillingInfoSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingProjectsGetBillingInfoSecurity extends SpeakeasyBase {
    option1?: CloudbillingProjectsGetBillingInfoSecurityOption1;
    option2?: CloudbillingProjectsGetBillingInfoSecurityOption2;
    option3?: CloudbillingProjectsGetBillingInfoSecurityOption3;
}
export declare class CloudbillingProjectsGetBillingInfoRequest extends SpeakeasyBase {
    pathParams: CloudbillingProjectsGetBillingInfoPathParams;
    queryParams: CloudbillingProjectsGetBillingInfoQueryParams;
    security: CloudbillingProjectsGetBillingInfoSecurity;
}
export declare class CloudbillingProjectsGetBillingInfoResponse extends SpeakeasyBase {
    contentType: string;
    projectBillingInfo?: shared.ProjectBillingInfo;
    statusCode: number;
}
