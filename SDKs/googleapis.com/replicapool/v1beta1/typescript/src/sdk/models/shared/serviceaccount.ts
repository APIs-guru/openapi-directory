import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccount
/** 
 * A Compute Engine service account, identical to the Compute Engine resource.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}
