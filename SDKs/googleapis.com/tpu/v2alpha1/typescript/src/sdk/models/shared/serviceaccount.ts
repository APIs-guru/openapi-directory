import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * A service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string[];
}
