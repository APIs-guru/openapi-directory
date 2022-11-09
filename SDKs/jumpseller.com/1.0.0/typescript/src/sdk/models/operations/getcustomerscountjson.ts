import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomersCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCustomersCountJsonQueryParams;
}


export class GetCustomersCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
