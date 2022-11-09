import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Auto = "AUTO"
}


// GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec
/** 
 * Specification to determine under which conditions query expansion should occur.
**/
export class GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum;

  @Metadata({ data: "json, name=pinUnexpandedResults" })
  pinUnexpandedResults?: boolean;
}
