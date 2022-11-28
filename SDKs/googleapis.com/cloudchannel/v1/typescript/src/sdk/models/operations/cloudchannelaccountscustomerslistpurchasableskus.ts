import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudchannelAccountsCustomersListPurchasableSkusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}

export enum CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Downgrade = "DOWNGRADE"
}


export class CloudchannelAccountsCustomersListPurchasableSkusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changeOfferPurchase.changeType" })
  changeOfferPurchaseChangeType?: CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changeOfferPurchase.entitlement" })
  changeOfferPurchaseEntitlement?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createEntitlementPurchase.product" })
  createEntitlementPurchaseProduct?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudchannelAccountsCustomersListPurchasableSkusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudchannelAccountsCustomersListPurchasableSkusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudchannelAccountsCustomersListPurchasableSkusPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudchannelAccountsCustomersListPurchasableSkusQueryParams;

  @SpeakeasyMetadata()
  security: CloudchannelAccountsCustomersListPurchasableSkusSecurity;
}


export class CloudchannelAccountsCustomersListPurchasableSkusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudChannelV1ListPurchasableSkusResponse?: shared.GoogleCloudChannelV1ListPurchasableSkusResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
