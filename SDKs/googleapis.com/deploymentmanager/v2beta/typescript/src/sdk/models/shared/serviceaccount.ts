import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * Service Account used as a credential.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
