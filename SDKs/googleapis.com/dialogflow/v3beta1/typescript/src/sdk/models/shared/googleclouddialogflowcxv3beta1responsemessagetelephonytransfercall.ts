import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall
/** 
 * Represents the signal that telles the client to transfer the phone call connected to the agent to a third-party endpoint.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
