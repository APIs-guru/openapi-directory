import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLanguagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class GetLanguagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLanguagesHeaders;
}


export class GetLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLanguagesResponse?: shared.GetLanguagesResponse;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
