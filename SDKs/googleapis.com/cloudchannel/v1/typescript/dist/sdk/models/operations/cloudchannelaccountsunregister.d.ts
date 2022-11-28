import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsUnregisterPathParams extends SpeakeasyBase {
    account: string;
}
export declare class CloudchannelAccountsUnregisterQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsUnregisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsUnregisterRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsUnregisterPathParams;
    queryParams: CloudchannelAccountsUnregisterQueryParams;
    request?: shared.GoogleCloudChannelV1UnregisterSubscriberRequest;
    security: CloudchannelAccountsUnregisterSecurity;
}
export declare class CloudchannelAccountsUnregisterResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1UnregisterSubscriberResponse?: shared.GoogleCloudChannelV1UnregisterSubscriberResponse;
    statusCode: number;
}
