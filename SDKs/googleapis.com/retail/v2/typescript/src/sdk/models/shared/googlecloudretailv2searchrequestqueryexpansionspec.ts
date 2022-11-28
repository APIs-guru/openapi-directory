import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}


// GoogleCloudRetailV2SearchRequestQueryExpansionSpec
/** 
 * Specification to determine under which conditions query expansion should occur.
**/
export class GoogleCloudRetailV2SearchRequestQueryExpansionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=pinUnexpandedResults" })
  pinUnexpandedResults?: boolean;
}
