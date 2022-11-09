import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FaresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=carriers" })
  carriers: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fare-types" })
  fareTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segments" })
  segments: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelers" })
  travelers?: string;
}


export class FaresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class FaresSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class FaresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FaresQueryParams;

  @Metadata()
  headers: FaresHeaders;

  @Metadata()
  security: FaresSecurity;
}


export class FaresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fares200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
