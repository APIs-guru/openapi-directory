import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomersEmailEmailJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class GetCustomersEmailEmailJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersEmailEmailJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomersEmailEmailJsonPathParams;

  @Metadata()
  queryParams: GetCustomersEmailEmailJsonQueryParams;
}


export class GetCustomersEmailEmailJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customer?: shared.Customer;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
