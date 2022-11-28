import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccount
/** 
 * A service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];
}
