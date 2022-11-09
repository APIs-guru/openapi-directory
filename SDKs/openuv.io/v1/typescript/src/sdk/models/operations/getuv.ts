import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUvQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dt" })
  dt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;
}


export class GetUvHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetUvRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUvQueryParams;

  @Metadata()
  headers: GetUvHeaders;
}


export class GetUvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uvIndexResult?: shared.UvIndexResult;
}
