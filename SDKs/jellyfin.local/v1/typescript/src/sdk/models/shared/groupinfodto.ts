import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupStateTypeEnum } from "./groupstatetypeenum";


// GroupInfoDto
/** 
 * Class GroupInfoDto.
**/
export class GroupInfoDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=Participants" })
  participants?: string[];

  @Metadata({ data: "json, name=State" })
  state?: GroupStateTypeEnum;
}
