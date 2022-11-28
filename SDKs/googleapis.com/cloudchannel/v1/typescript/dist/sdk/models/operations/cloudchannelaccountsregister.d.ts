import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsRegisterPathParams extends SpeakeasyBase {
    account: string;
}
export declare class CloudchannelAccountsRegisterQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsRegisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsRegisterRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsRegisterPathParams;
    queryParams: CloudchannelAccountsRegisterQueryParams;
    request?: shared.GoogleCloudChannelV1RegisterSubscriberRequest;
    security: CloudchannelAccountsRegisterSecurity;
}
export declare class CloudchannelAccountsRegisterResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1RegisterSubscriberResponse?: shared.GoogleCloudChannelV1RegisterSubscriberResponse;
    statusCode: number;
}
