import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrdersIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrdersIdJsonQueryParams;
}


export class GetOrdersIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  order?: shared.Order;

  @SpeakeasyMetadata()
  statusCode: number;
}
