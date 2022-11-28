import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaylistPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embedHtml" })
  embedHtml?: string;
}
