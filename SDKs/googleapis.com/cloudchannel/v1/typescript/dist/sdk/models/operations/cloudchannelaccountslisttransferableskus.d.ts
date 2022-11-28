import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsListTransferableSkusPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsListTransferableSkusQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsListTransferableSkusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsListTransferableSkusRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsListTransferableSkusPathParams;
    queryParams: CloudchannelAccountsListTransferableSkusQueryParams;
    request?: shared.GoogleCloudChannelV1ListTransferableSkusRequest;
    security: CloudchannelAccountsListTransferableSkusSecurity;
}
export declare class CloudchannelAccountsListTransferableSkusResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListTransferableSkusResponse?: shared.GoogleCloudChannelV1ListTransferableSkusResponse;
    statusCode: number;
}
