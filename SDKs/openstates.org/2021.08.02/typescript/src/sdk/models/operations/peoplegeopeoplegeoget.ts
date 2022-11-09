import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PeopleGeoPeopleGeoGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.PersonIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;
}


export class PeopleGeoPeopleGeoGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class PeopleGeoPeopleGeoGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PeopleGeoPeopleGeoGetQueryParams;

  @Metadata()
  headers: PeopleGeoPeopleGeoGetHeaders;
}


export class PeopleGeoPeopleGeoGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  personList?: shared.PersonList;

  @Metadata()
  statusCode: number;
}
