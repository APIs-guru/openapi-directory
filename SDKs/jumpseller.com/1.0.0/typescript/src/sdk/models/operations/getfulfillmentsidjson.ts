import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFulfillmentsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFulfillmentsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetFulfillmentsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFulfillmentsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFulfillmentsIdJsonQueryParams;
}


export class GetFulfillmentsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fulfillment?: shared.Fulfillment;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
