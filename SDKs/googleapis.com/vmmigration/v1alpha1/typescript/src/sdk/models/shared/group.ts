import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Group
/** 
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
