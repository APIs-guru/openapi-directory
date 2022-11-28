import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountInput } from "./serviceaccount";



// CreateServiceAccountRequestInput
/** 
 * The service account create request.
**/
export class CreateServiceAccountRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccountInput;
}
