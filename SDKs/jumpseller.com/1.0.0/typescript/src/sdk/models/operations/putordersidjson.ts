import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOrdersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutOrdersIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutOrdersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOrdersIdJsonPathParams;

  @Metadata()
  queryParams: PutOrdersIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrderEdit;
}


export class PutOrdersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  order?: shared.Order;

  @Metadata()
  statusCode: number;
}
