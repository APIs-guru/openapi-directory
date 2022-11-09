import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFulfillmentsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetFulfillmentsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFulfillmentsJsonQueryParams;
}


export class GetFulfillmentsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Fulfillment })
  fulfillments?: shared.Fulfillment[];

  @Metadata()
  statusCode: number;
}
