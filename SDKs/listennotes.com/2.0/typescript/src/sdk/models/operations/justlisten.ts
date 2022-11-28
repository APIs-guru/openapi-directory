import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JustListenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class JustListenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: JustListenHeaders;
}


export class JustListenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodeSimple?: shared.EpisodeSimple;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
