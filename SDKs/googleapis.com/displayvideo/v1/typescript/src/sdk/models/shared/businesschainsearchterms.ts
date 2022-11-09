import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BusinessChainSearchTerms
/** 
 * Search terms for Business Chain targeting options. At least one of the field should be populated.
**/
export class BusinessChainSearchTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessChainQuery" })
  businessChainQuery?: string;

  @Metadata({ data: "json, name=regionQuery" })
  regionQuery?: string;
}
