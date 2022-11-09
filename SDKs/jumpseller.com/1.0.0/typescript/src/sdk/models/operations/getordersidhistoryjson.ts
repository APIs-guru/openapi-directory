import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersIdHistoryJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersIdHistoryJsonPathParams;

  @Metadata()
  queryParams: GetOrdersIdHistoryJsonQueryParams;
}


export class GetOrdersIdHistoryJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.OrderHistory })
  orderHistories?: shared.OrderHistory[];

  @Metadata()
  statusCode: number;
}
