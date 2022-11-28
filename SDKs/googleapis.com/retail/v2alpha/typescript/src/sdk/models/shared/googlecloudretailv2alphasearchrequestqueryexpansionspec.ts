import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}


// GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec
/** 
 * Specification to determine under which conditions query expansion should occur.
**/
export class GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=pinUnexpandedResults" })
  pinUnexpandedResults?: boolean;
}
