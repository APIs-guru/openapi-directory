import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFulfillmentsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetFulfillmentsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFulfillmentsCountJsonQueryParams;
}


export class GetFulfillmentsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
