import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupStateTypeEnum } from "./groupstatetypeenum";



// GroupInfoDto
/** 
 * Class GroupInfoDto.
**/
export class GroupInfoDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Participants" })
  participants?: string[];

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: GroupStateTypeEnum;
}
