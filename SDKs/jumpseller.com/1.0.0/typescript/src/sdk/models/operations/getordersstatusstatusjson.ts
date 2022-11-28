import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetOrdersStatusStatusJsonStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}


export class GetOrdersStatusStatusJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetOrdersStatusStatusJsonStatusEnum;
}


export class GetOrdersStatusStatusJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersStatusStatusJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersStatusStatusJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrdersStatusStatusJsonQueryParams;
}


export class GetOrdersStatusStatusJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Order })
  orders?: shared.Order[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusInvalid?: any;
}
