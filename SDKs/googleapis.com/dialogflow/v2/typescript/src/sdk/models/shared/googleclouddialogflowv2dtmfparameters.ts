import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2DtmfParameters
/** 
 * The message in the response that indicates the parameters of DTMF.
**/
export class GoogleCloudDialogflowV2DtmfParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptsDtmfInput" })
  acceptsDtmfInput?: boolean;
}
