import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LevelDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
