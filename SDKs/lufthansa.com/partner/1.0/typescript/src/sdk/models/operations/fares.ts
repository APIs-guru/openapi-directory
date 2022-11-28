import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FaresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=carriers" })
  carriers: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fare-types" })
  fareTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segments" })
  segments: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class FaresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class FaresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class FaresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FaresQueryParams;

  @SpeakeasyMetadata()
  headers: FaresHeaders;

  @SpeakeasyMetadata()
  security: FaresSecurity;
}


export class FaresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fares200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
