import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Buyer
/** 
 * RTB Buyer account information.
**/
export class Buyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeCreativeCount" })
  activeCreativeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bidder" })
  bidder?: string;

  @SpeakeasyMetadata({ data: "json, name=billingIds" })
  billingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumActiveCreativeCount" })
  maximumActiveCreativeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
