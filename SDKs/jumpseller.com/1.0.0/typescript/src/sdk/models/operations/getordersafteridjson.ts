import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrdersAfterIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersAfterIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersAfterIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersAfterIdJsonPathParams;

  @Metadata()
  queryParams: GetOrdersAfterIdJsonQueryParams;
}


export class GetOrdersAfterIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  order?: shared.Order;

  @Metadata()
  statusCode: number;
}
