import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersCustomerRepricingConfigsListPathParams;
    queryParams: CloudchannelAccountsCustomersCustomerRepricingConfigsListQueryParams;
    security: CloudchannelAccountsCustomersCustomerRepricingConfigsListSecurity;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListCustomerRepricingConfigsResponse?: shared.GoogleCloudChannelV1ListCustomerRepricingConfigsResponse;
    statusCode: number;
}
