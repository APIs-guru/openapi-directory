import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// CheckRequest
/** 
 * Request message for the Check method.
**/
export class CheckRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=requestProjectSettings" })
  requestProjectSettings?: boolean;

  @Metadata({ data: "json, name=serviceConfigId" })
  serviceConfigId?: string;

  @Metadata({ data: "json, name=skipActivationCheck" })
  skipActivationCheck?: boolean;
}
