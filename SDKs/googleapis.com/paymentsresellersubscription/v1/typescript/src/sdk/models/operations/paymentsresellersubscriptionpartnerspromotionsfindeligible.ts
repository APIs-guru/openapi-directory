import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams;

  @Metadata()
  queryParams: PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest;
}


export class PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse;

  @Metadata()
  statusCode: number;
}
