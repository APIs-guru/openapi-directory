import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOrdersOrderStatusEnum {
    Active = "Active"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


export class GetOrdersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderStatus" })
  orderStatus?: GetOrdersOrderStatusEnum;
}


export class GetOrdersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrdersQueryParams;
}


export class GetOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOfOrders?: shared.ListOfOrders;

  @Metadata()
  statusCode: number;
}
