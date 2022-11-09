import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccount
/** 
 * Carries information about a Google Cloud service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}
