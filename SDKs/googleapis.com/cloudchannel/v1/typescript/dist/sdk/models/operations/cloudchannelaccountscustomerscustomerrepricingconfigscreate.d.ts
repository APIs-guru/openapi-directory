import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersCustomerRepricingConfigsCreatePathParams;
    queryParams: CloudchannelAccountsCustomersCustomerRepricingConfigsCreateQueryParams;
    request?: shared.GoogleCloudChannelV1CustomerRepricingConfigInput;
    security: CloudchannelAccountsCustomersCustomerRepricingConfigsCreateSecurity;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1CustomerRepricingConfig?: shared.GoogleCloudChannelV1CustomerRepricingConfig;
    statusCode: number;
}
