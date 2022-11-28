import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGenresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top_level_only" })
  topLevelOnly?: number;
}


export class GetGenresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetGenresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGenresQueryParams;

  @SpeakeasyMetadata()
  headers: GetGenresHeaders;
}


export class GetGenresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGenresResponse?: shared.GetGenresResponse;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
