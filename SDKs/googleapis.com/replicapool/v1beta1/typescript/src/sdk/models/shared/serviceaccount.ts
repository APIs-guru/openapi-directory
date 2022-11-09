import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * A Compute Engine service account, identical to the Compute Engine resource.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}
