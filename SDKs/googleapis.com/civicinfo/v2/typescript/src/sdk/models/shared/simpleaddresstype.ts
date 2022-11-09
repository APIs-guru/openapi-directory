import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SimpleAddressType
/** 
 * A simple representation of an address.
**/
export class SimpleAddressType extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=line1" })
  line1?: string;

  @Metadata({ data: "json, name=line2" })
  line2?: string;

  @Metadata({ data: "json, name=line3" })
  line3?: string;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
