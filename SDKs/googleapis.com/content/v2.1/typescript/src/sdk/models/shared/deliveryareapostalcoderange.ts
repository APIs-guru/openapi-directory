import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeliveryAreaPostalCodeRange
/** 
 * A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
**/
export class DeliveryAreaPostalCodeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstPostalCode" })
  firstPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastPostalCode" })
  lastPostalCode?: string;
}
