import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagValue
/** 
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
**/
export class TagValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespacedName" })
  namespacedName?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
