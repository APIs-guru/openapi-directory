import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccount } from "./serviceaccount";


// CreateServiceAccountRequest
/** 
 * The service account create request.
**/
export class CreateServiceAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;
}
