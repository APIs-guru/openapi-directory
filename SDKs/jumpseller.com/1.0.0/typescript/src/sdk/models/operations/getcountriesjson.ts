import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCountriesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCountriesJsonQueryParams;
}


export class GetCountriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  countries?: any[];

  @Metadata()
  statusCode: number;
}
