import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingProjectsUpdateBillingInfoPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbillingProjectsUpdateBillingInfoQueryParams extends SpeakeasyBase {
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
export declare class CloudbillingProjectsUpdateBillingInfoSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingProjectsUpdateBillingInfoSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingProjectsUpdateBillingInfoSecurity extends SpeakeasyBase {
    option1?: CloudbillingProjectsUpdateBillingInfoSecurityOption1;
    option2?: CloudbillingProjectsUpdateBillingInfoSecurityOption2;
}
export declare class CloudbillingProjectsUpdateBillingInfoRequest extends SpeakeasyBase {
    pathParams: CloudbillingProjectsUpdateBillingInfoPathParams;
    queryParams: CloudbillingProjectsUpdateBillingInfoQueryParams;
    request?: shared.ProjectBillingInfo;
    security: CloudbillingProjectsUpdateBillingInfoSecurity;
}
export declare class CloudbillingProjectsUpdateBillingInfoResponse extends SpeakeasyBase {
    contentType: string;
    projectBillingInfo?: shared.ProjectBillingInfo;
    statusCode: number;
}
