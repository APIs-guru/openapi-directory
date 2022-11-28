import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SimpleAddressType
/** 
 * A simple representation of an address.
**/
export class SimpleAddressType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
