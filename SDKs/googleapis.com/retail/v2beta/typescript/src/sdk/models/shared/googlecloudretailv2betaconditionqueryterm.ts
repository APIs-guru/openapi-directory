import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaConditionQueryTerm
/** 
 * Query terms that we want to match on.
**/
export class GoogleCloudRetailV2betaConditionQueryTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullMatch" })
  fullMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
