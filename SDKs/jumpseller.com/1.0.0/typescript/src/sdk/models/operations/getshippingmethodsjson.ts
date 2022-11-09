import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShippingMethodsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetShippingMethodsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShippingMethodsJsonQueryParams;
}


export class GetShippingMethodsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ShippingMethod })
  shippingMethods?: shared.ShippingMethod[];

  @Metadata()
  statusCode: number;
}
