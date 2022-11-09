import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeliveryAreaPostalCodeRange
/** 
 * A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
**/
export class DeliveryAreaPostalCodeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstPostalCode" })
  firstPostalCode?: string;

  @Metadata({ data: "json, name=lastPostalCode" })
  lastPostalCode?: string;
}
