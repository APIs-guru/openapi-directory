import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3DtmfInput
/** 
 * Represents the input for dtmf event.
**/
export class GoogleCloudDialogflowCxV3DtmfInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=digits" })
  digits?: string;

  @Metadata({ data: "json, name=finishDigit" })
  finishDigit?: string;
}
