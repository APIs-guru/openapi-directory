import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUvQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dt" })
  dt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ozone" })
  ozone?: number;
}


export class GetUvHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-access-token" })
  xAccessToken: string;
}


export class GetUvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUvQueryParams;

  @SpeakeasyMetadata()
  headers: GetUvHeaders;
}


export class GetUvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uvIndexResult?: shared.UvIndexResult;
}
