import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsProjectsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbillingBillingAccountsProjectsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbillingBillingAccountsProjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsProjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsProjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsProjectsListSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsProjectsListSecurityOption1;
    option2?: CloudbillingBillingAccountsProjectsListSecurityOption2;
    option3?: CloudbillingBillingAccountsProjectsListSecurityOption3;
}
export declare class CloudbillingBillingAccountsProjectsListRequest extends SpeakeasyBase {
    pathParams: CloudbillingBillingAccountsProjectsListPathParams;
    queryParams: CloudbillingBillingAccountsProjectsListQueryParams;
    security: CloudbillingBillingAccountsProjectsListSecurity;
}
export declare class CloudbillingBillingAccountsProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listProjectBillingInfoResponse?: shared.ListProjectBillingInfoResponse;
    statusCode: number;
}
