import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams extends SpeakeasyBase {
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


export class PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams;

  @Metadata()
  queryParams: PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
}


export class PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse;

  @Metadata()
  statusCode: number;
}
