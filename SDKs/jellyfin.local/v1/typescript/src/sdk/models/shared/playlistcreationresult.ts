import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaylistCreationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
