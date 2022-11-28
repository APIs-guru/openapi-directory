import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1DtmfInput
/** 
 * Represents the input for dtmf event.
**/
export class GoogleCloudDialogflowCxV3beta1DtmfInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digits" })
  digits?: string;

  @SpeakeasyMetadata({ data: "json, name=finishDigit" })
  finishDigit?: string;
}
