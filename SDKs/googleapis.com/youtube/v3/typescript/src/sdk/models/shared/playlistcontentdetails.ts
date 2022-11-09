import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaylistContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemCount" })
  itemCount?: number;
}
