import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaylistContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: number;
}
