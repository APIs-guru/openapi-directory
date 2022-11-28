import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersCustomerRepricingConfigsPatchPathParams;
    queryParams: CloudchannelAccountsCustomersCustomerRepricingConfigsPatchQueryParams;
    request?: shared.GoogleCloudChannelV1CustomerRepricingConfigInput;
    security: CloudchannelAccountsCustomersCustomerRepricingConfigsPatchSecurity;
}
export declare class CloudchannelAccountsCustomersCustomerRepricingConfigsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1CustomerRepricingConfig?: shared.GoogleCloudChannelV1CustomerRepricingConfig;
    statusCode: number;
}
