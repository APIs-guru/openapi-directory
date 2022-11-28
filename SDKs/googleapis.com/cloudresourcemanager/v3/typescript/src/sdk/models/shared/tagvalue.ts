import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagValueInput
/** 
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
**/
export class TagValueInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;
}


// TagValue
/** 
 * A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies.
**/
export class TagValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespacedName" })
  namespacedName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
