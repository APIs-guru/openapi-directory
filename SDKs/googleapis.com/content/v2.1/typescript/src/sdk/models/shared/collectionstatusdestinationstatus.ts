import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollectionStatusDestinationStatus
/** 
 * Destination status message.
**/
export class CollectionStatusDestinationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvedCountries" })
  approvedCountries?: string[];

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=disapprovedCountries" })
  disapprovedCountries?: string[];

  @Metadata({ data: "json, name=pendingCountries" })
  pendingCountries?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
