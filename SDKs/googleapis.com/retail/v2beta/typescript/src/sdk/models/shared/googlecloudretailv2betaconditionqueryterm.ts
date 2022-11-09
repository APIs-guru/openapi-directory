import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaConditionQueryTerm
/** 
 * Query terms that we want to match on.
**/
export class GoogleCloudRetailV2betaConditionQueryTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullMatch" })
  fullMatch?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
