import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCountriesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCountriesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCountriesJsonQueryParams;
}


export class GetCountriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  countries?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
