import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionStatusDestinationStatus
/** 
 * Destination status message.
**/
export class CollectionStatusDestinationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvedCountries" })
  approvedCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=disapprovedCountries" })
  disapprovedCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=pendingCountries" })
  pendingCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
