import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaylistPlayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=embedHtml" })
  embedHtml?: string;
}
