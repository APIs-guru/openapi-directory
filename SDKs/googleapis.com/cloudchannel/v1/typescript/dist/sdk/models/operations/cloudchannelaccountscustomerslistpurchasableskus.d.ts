import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsCustomersListPurchasableSkusPathParams extends SpeakeasyBase {
    customer: string;
}
export declare enum CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Downgrade = "DOWNGRADE"
}
export declare class CloudchannelAccountsCustomersListPurchasableSkusQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    changeOfferPurchaseChangeType?: CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;
    changeOfferPurchaseEntitlement?: string;
    createEntitlementPurchaseProduct?: string;
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
export declare class CloudchannelAccountsCustomersListPurchasableSkusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsCustomersListPurchasableSkusRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsCustomersListPurchasableSkusPathParams;
    queryParams: CloudchannelAccountsCustomersListPurchasableSkusQueryParams;
    security: CloudchannelAccountsCustomersListPurchasableSkusSecurity;
}
export declare class CloudchannelAccountsCustomersListPurchasableSkusResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListPurchasableSkusResponse?: shared.GoogleCloudChannelV1ListPurchasableSkusResponse;
    statusCode: number;
}
