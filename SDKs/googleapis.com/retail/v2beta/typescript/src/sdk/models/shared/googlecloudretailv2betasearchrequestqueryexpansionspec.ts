import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Auto = "AUTO"
}


// GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec
/** 
 * Specification to determine under which conditions query expansion should occur.
**/
export class GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum;

  @Metadata({ data: "json, name=pinUnexpandedResults" })
  pinUnexpandedResults?: boolean;
}
