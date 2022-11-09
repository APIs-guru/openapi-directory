import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EffectiveTag
/** 
 * An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
**/
export class EffectiveTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @Metadata({ data: "json, name=namespacedTagKey" })
  namespacedTagKey?: string;

  @Metadata({ data: "json, name=namespacedTagValue" })
  namespacedTagValue?: string;

  @Metadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @Metadata({ data: "json, name=tagValue" })
  tagValue?: string;
}
