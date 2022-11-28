import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShippingMethodsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetShippingMethodsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShippingMethodsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetShippingMethodsIdJsonQueryParams;
}


export class GetShippingMethodsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  shippingMethod?: shared.ShippingMethod;

  @SpeakeasyMetadata()
  statusCode: number;
}
