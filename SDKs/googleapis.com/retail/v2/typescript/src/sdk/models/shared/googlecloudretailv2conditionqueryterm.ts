import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2ConditionQueryTerm
/** 
 * Query terms that we want to match on.
**/
export class GoogleCloudRetailV2ConditionQueryTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullMatch" })
  fullMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
