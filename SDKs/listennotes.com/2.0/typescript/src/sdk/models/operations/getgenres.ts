import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGenresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=top_level_only" })
  topLevelOnly?: number;
}


export class GetGenresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetGenresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGenresQueryParams;

  @Metadata()
  headers: GetGenresHeaders;
}


export class GetGenresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGenresResponse?: shared.GetGenresResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
