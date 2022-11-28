import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EffectiveTag
/** 
 * An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
**/
export class EffectiveTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=namespacedTagKey" })
  namespacedTagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=namespacedTagValue" })
  namespacedTagValue?: string;

  @SpeakeasyMetadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValue" })
  tagValue?: string;
}
