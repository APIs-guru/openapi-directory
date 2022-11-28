import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsListSubscribersPathParams extends SpeakeasyBase {
    account: string;
}
export declare class CloudchannelAccountsListSubscribersQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsListSubscribersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsListSubscribersRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsListSubscribersPathParams;
    queryParams: CloudchannelAccountsListSubscribersQueryParams;
    security: CloudchannelAccountsListSubscribersSecurity;
}
export declare class CloudchannelAccountsListSubscribersResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListSubscribersResponse?: shared.GoogleCloudChannelV1ListSubscribersResponse;
    statusCode: number;
}
