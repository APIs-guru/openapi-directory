import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";



// GoogleCloudDataplexV1DataQualityRuleResult
/** 
 * DataQualityRuleResult provides a more detailed, per-rule level view of the results.
**/
export class GoogleCloudDataplexV1DataQualityRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluatedCount" })
  evaluatedCount?: string;

  @SpeakeasyMetadata({ data: "json, name=failingRowsQuery" })
  failingRowsQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=nullCount" })
  nullCount?: string;

  @SpeakeasyMetadata({ data: "json, name=passRatio" })
  passRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=passed" })
  passed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=passedCount" })
  passedCount?: string;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: GoogleCloudDataplexV1DataQualityRule;
}
