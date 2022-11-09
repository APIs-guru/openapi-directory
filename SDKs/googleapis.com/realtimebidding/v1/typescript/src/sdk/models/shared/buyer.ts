import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Buyer
/** 
 * RTB Buyer account information.
**/
export class Buyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeCreativeCount" })
  activeCreativeCount?: string;

  @Metadata({ data: "json, name=bidder" })
  bidder?: string;

  @Metadata({ data: "json, name=billingIds" })
  billingIds?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=maximumActiveCreativeCount" })
  maximumActiveCreativeCount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
