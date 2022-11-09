import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostOrdersIdHistoryJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOrdersIdHistoryJsonPathParams;

  @Metadata()
  queryParams: PostOrdersIdHistoryJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrderHistoryEdit;
}


export class PostOrdersIdHistoryJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderHistory?: shared.OrderHistory;

  @Metadata()
  statusCode: number;
}
