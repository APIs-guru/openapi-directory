import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall
/** 
 * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sipUri" })
  sipUri?: string;
}
