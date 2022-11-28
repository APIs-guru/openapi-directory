import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersProvisionCloudIdentityPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class CloudchannelAccountsCustomersProvisionCloudIdentityQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersProvisionCloudIdentitySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersProvisionCloudIdentityRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersProvisionCloudIdentityPathParams;
    queryParams: CloudchannelAccountsCustomersProvisionCloudIdentityQueryParams;
    request?: shared.GoogleCloudChannelV1ProvisionCloudIdentityRequestInput;
    security: CloudchannelAccountsCustomersProvisionCloudIdentitySecurity;
}
export declare class CloudchannelAccountsCustomersProvisionCloudIdentityResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
