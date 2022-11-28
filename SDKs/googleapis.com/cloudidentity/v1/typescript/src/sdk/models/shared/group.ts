import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicGroupMetadata } from "./dynamicgroupmetadata";
import { EntityKey } from "./entitykey";



// Group
/** 
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicGroupMetadata" })
  dynamicGroupMetadata?: DynamicGroupMetadata;

  @SpeakeasyMetadata({ data: "json, name=groupKey" })
  groupKey?: EntityKey;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GroupInput
/** 
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
export class GroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamicGroupMetadata" })
  dynamicGroupMetadata?: DynamicGroupMetadata;

  @SpeakeasyMetadata({ data: "json, name=groupKey" })
  groupKey?: EntityKey;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
