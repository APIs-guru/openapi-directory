import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutShippingMethodsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutShippingMethodsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutShippingMethodsIdJsonPathParams;

  @Metadata()
  queryParams: PutShippingMethodsIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShippingMethodEdit;
}


export class PutShippingMethodsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  shippingMethod?: shared.ShippingMethod;

  @Metadata()
  statusCode: number;
}
