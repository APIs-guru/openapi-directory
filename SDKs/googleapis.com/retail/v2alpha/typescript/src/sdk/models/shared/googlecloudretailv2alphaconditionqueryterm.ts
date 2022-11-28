import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaConditionQueryTerm
/** 
 * Query terms that we want to match on.
**/
export class GoogleCloudRetailV2alphaConditionQueryTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullMatch" })
  fullMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
