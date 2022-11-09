import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrdersCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrdersCountJsonQueryParams;
}


export class GetOrdersCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
