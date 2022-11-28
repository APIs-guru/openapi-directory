import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PeopleGeoPeopleGeoGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.PersonIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;
}


export class PeopleGeoPeopleGeoGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class PeopleGeoPeopleGeoGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PeopleGeoPeopleGeoGetQueryParams;

  @SpeakeasyMetadata()
  headers: PeopleGeoPeopleGeoGetHeaders;
}


export class PeopleGeoPeopleGeoGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  personList?: shared.PersonList;

  @SpeakeasyMetadata()
  statusCode: number;
}
