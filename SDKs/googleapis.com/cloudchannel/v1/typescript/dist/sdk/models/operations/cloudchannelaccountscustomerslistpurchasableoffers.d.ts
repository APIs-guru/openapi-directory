import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersListPurchasableOffersPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class CloudchannelAccountsCustomersListPurchasableOffersQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    changeOfferPurchaseEntitlement?: string;
    changeOfferPurchaseNewSku?: string;
    createEntitlementPurchaseSku?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsCustomersListPurchasableOffersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersListPurchasableOffersRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersListPurchasableOffersPathParams;
    queryParams: CloudchannelAccountsCustomersListPurchasableOffersQueryParams;
    security: CloudchannelAccountsCustomersListPurchasableOffersSecurity;
}
export declare class CloudchannelAccountsCustomersListPurchasableOffersResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListPurchasableOffersResponse?: shared.GoogleCloudChannelV1ListPurchasableOffersResponse;
    statusCode: number;
}
