import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicGroupMetadata } from "./dynamicgroupmetadata";
import { EntityKey } from "./entitykey";
import { PosixGroup } from "./posixgroup";


// Group
/** 
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dynamicGroupMetadata" })
  dynamicGroupMetadata?: DynamicGroupMetadata;

  @Metadata({ data: "json, name=groupKey" })
  groupKey?: EntityKey;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=posixGroups", elemType: shared.PosixGroup })
  posixGroups?: PosixGroup[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
