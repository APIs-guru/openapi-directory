import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Group
/** 
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GroupInput
/** 
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
**/
export class GroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
