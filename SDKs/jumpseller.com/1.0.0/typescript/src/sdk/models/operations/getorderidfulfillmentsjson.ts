import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderIdFulfillmentsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetOrderIdFulfillmentsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrderIdFulfillmentsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderIdFulfillmentsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrderIdFulfillmentsJsonQueryParams;
}


export class GetOrderIdFulfillmentsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Fulfillment })
  fulfillments?: shared.Fulfillment[];

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
