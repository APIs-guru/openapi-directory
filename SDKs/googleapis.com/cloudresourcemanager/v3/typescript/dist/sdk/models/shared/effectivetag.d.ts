import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag.
**/
export declare class EffectiveTag extends SpeakeasyBase {
    inherited?: boolean;
    namespacedTagKey?: string;
    namespacedTagValue?: string;
    tagKey?: string;
    tagValue?: string;
}
