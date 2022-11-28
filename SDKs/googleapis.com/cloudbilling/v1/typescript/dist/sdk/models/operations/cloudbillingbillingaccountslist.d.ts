import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbillingBillingAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbillingBillingAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingBillingAccountsListSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsListSecurityOption1;
    option2?: CloudbillingBillingAccountsListSecurityOption2;
    option3?: CloudbillingBillingAccountsListSecurityOption3;
}
export declare class CloudbillingBillingAccountsListRequest extends SpeakeasyBase {
    queryParams: CloudbillingBillingAccountsListQueryParams;
    security: CloudbillingBillingAccountsListSecurity;
}
export declare class CloudbillingBillingAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listBillingAccountsResponse?: shared.ListBillingAccountsResponse;
    statusCode: number;
}
