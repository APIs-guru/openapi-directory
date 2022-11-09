import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2ConditionQueryTerm
/** 
 * Query terms that we want to match on.
**/
export class GoogleCloudRetailV2ConditionQueryTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullMatch" })
  fullMatch?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
