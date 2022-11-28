import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BusinessChainSearchTerms
/** 
 * Search terms for Business Chain targeting options. At least one of the field should be populated.
**/
export class BusinessChainSearchTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessChainQuery" })
  businessChainQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=regionQuery" })
  regionQuery?: string;
}
