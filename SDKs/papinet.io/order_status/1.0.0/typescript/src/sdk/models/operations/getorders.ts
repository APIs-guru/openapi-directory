import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetOrdersOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


export class GetOrdersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderStatus" })
  orderStatus?: GetOrdersOrderStatusEnum;
}


export class GetOrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrdersQueryParams;
}


export class GetOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOfOrders?: shared.ListOfOrders;

  @SpeakeasyMetadata()
  statusCode: number;
}
