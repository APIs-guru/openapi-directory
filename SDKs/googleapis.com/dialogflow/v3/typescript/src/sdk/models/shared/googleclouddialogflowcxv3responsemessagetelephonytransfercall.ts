import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall
/** 
 * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
