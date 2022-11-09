import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbillingServicesSkusListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbillingServicesSkusListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currencyCode?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbillingServicesSkusListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingServicesSkusListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingServicesSkusListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbillingServicesSkusListSecurity extends SpeakeasyBase {
    option1?: CloudbillingServicesSkusListSecurityOption1;
    option2?: CloudbillingServicesSkusListSecurityOption2;
    option3?: CloudbillingServicesSkusListSecurityOption3;
}
export declare class CloudbillingServicesSkusListRequest extends SpeakeasyBase {
    pathParams: CloudbillingServicesSkusListPathParams;
    queryParams: CloudbillingServicesSkusListQueryParams;
    security: CloudbillingServicesSkusListSecurity;
}
export declare class CloudbillingServicesSkusListResponse extends SpeakeasyBase {
    contentType: string;
    listSkusResponse?: shared.ListSkusResponse;
    statusCode: number;
}
