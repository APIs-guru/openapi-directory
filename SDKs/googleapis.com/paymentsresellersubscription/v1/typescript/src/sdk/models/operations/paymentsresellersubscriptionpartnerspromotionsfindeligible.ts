import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams;

  @SpeakeasyMetadata()
  queryParams: PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
