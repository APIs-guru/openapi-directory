import { SpeakeasyBase } from "../../../internal/utils";
import { GroupStateTypeEnum } from "./groupstatetypeenum";
/**
 * Class GroupInfoDto.
**/
export declare class GroupInfoDto extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
    lastUpdatedAt?: Date;
    participants?: string[];
    state?: GroupStateTypeEnum;
}
