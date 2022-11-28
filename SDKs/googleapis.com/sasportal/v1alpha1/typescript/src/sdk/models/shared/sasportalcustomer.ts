import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalCustomer
/** 
 * Entity representing a SAS customer.
**/
export class SasPortalCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
