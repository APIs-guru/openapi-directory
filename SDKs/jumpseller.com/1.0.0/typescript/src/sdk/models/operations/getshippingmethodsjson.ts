import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShippingMethodsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetShippingMethodsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShippingMethodsJsonQueryParams;
}


export class GetShippingMethodsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ShippingMethod })
  shippingMethods?: shared.ShippingMethod[];

  @SpeakeasyMetadata()
  statusCode: number;
}
