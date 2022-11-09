import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostShippingMethodsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostShippingMethodsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostShippingMethodsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShippingMethodEdit;
}


export class PostShippingMethodsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  shippingMethod?: shared.ShippingMethod;

  @Metadata()
  statusCode: number;
}
