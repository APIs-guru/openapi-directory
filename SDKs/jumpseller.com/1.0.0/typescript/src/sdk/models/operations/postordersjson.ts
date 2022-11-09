import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOrdersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostOrdersJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostOrdersJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OrderCreate;
}


export class PostOrdersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  order?: shared.Order;

  @Metadata()
  statusCode: number;
}
