import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCheckCloudIdentityAccountsExistRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams;
    queryParams: CloudchannelAccountsCheckCloudIdentityAccountsExistQueryParams;
    request?: shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest;
    security: CloudchannelAccountsCheckCloudIdentityAccountsExistSecurity;
}
export declare class CloudchannelAccountsCheckCloudIdentityAccountsExistResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1CheckCloudIdentityAccountsExistResponse?: shared.GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse;
    statusCode: number;
}
