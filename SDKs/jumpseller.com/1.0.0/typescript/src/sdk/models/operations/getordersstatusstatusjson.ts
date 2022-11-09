import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOrdersStatusStatusJsonStatusEnum {
    Abandoned = "Abandoned"
,    Canceled = "Canceled"
,    PendingPayment = "Pending Payment"
,    Paid = "Paid"
}


export class GetOrdersStatusStatusJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetOrdersStatusStatusJsonStatusEnum;
}


export class GetOrdersStatusStatusJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersStatusStatusJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersStatusStatusJsonPathParams;

  @Metadata()
  queryParams: GetOrdersStatusStatusJsonQueryParams;
}


export class GetOrdersStatusStatusJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Order })
  orders?: shared.Order[];

  @Metadata()
  statusCode: number;

  @Metadata()
  statusInvalid?: any;
}
