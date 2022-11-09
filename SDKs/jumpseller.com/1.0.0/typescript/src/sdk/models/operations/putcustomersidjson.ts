import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomersIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomersIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomersIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCustomersIdJsonPathParams;

  @Metadata()
  queryParams: PutCustomersIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerWithPasswordNoId;
}


export class PutCustomersIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customer?: shared.Customer;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
