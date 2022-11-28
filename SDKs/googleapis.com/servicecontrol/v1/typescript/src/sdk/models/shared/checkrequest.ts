import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// CheckRequest
/** 
 * Request message for the Check method.
**/
export class CheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=requestProjectSettings" })
  requestProjectSettings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=skipActivationCheck" })
  skipActivationCheck?: boolean;
}
