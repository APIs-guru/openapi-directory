import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsListTransferableOffersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsListTransferableOffersQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsListTransferableOffersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsListTransferableOffersRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsListTransferableOffersPathParams;
    queryParams: CloudchannelAccountsListTransferableOffersQueryParams;
    request?: shared.GoogleCloudChannelV1ListTransferableOffersRequest;
    security: CloudchannelAccountsListTransferableOffersSecurity;
}
export declare class CloudchannelAccountsListTransferableOffersResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListTransferableOffersResponse?: shared.GoogleCloudChannelV1ListTransferableOffersResponse;
    statusCode: number;
}
