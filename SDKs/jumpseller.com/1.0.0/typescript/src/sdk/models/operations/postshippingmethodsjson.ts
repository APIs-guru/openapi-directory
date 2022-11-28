import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostShippingMethodsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostShippingMethodsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostShippingMethodsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShippingMethodEdit;
}


export class PostShippingMethodsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  shippingMethod?: shared.ShippingMethod;

  @SpeakeasyMetadata()
  statusCode: number;
}
