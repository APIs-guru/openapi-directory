import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersIdHistoryJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersIdHistoryJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrdersIdHistoryJsonQueryParams;
}


export class GetOrdersIdHistoryJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.OrderHistory })
  orderHistories?: shared.OrderHistory[];

  @SpeakeasyMetadata()
  statusCode: number;
}
