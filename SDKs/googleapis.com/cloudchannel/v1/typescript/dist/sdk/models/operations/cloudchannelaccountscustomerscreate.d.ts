import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCustomersCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCustomersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersCreateRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersCreatePathParams;
    queryParams: CloudchannelAccountsCustomersCreateQueryParams;
    request?: shared.GoogleCloudChannelV1CustomerInput;
    security: CloudchannelAccountsCustomersCreateSecurity;
}
export declare class CloudchannelAccountsCustomersCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1Customer?: shared.GoogleCloudChannelV1Customer;
    statusCode: number;
}
