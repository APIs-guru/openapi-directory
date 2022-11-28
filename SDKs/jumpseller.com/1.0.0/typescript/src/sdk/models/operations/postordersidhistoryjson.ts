import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostOrdersIdHistoryJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOrdersIdHistoryJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostOrdersIdHistoryJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderHistoryEdit;
}


export class PostOrdersIdHistoryJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orderHistory?: shared.OrderHistory;

  @SpeakeasyMetadata()
  statusCode: number;
}
