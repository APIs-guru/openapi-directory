import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LevelDetails } from "./leveldetails";



export class MembershipsLevelSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorChannelId" })
  creatorChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=levelDetails" })
  levelDetails?: LevelDetails;
}
