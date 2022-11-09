import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JustListenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class JustListenRequest extends SpeakeasyBase {
  @Metadata()
  headers: JustListenHeaders;
}


export class JustListenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodeSimple?: shared.EpisodeSimple;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
