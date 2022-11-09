import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalCustomer
/** 
 * Entity representing a SAS customer.
**/
export class SasPortalCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sasUserIds" })
  sasUserIds?: string[];
}
