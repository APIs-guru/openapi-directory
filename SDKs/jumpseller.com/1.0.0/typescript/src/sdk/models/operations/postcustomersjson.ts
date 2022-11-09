import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomersJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomersJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCustomersJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerWithPasswordNoId;
}


export class PostCustomersJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customer?: shared.Customer;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
