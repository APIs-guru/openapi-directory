import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LevelDetails } from "./leveldetails";


export class MembershipsLevelSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatorChannelId" })
  creatorChannelId?: string;

  @Metadata({ data: "json, name=levelDetails" })
  levelDetails?: LevelDetails;
}
