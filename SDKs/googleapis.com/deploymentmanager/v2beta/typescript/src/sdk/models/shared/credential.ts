import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicAuth } from "./basicauth";
import { ServiceAccount } from "./serviceaccount";


// Credential
/** 
 * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
**/
export class Credential extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuth" })
  basicAuth?: BasicAuth;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @Metadata({ data: "json, name=useProjectDefault" })
  useProjectDefault?: boolean;
}
