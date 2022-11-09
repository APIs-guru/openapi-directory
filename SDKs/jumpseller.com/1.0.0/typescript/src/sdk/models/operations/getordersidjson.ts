import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrdersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersIdJsonPathParams;

  @Metadata()
  queryParams: GetOrdersIdJsonQueryParams;
}


export class GetOrdersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  order?: shared.Order;

  @Metadata()
  statusCode: number;
}
