import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccount
/** 
 * Service Account used as a credential.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
