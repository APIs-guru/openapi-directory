import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicAuth } from "./basicauth";
import { ServiceAccount } from "./serviceaccount";



// Credential
/** 
 * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
**/
export class Credential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuth" })
  basicAuth?: BasicAuth;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @SpeakeasyMetadata({ data: "json, name=useProjectDefault" })
  useProjectDefault?: boolean;
}
