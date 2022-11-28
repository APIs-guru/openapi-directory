import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrdersAfterIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersAfterIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersAfterIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersAfterIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrdersAfterIdJsonQueryParams;
}


export class GetOrdersAfterIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  order?: shared.Order;

  @SpeakeasyMetadata()
  statusCode: number;
}
