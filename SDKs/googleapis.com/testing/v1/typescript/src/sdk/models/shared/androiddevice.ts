import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidDevice
/** 
 * A single Android device.
**/
export class AndroidDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidModelId" })
  androidModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=androidVersionId" })
  androidVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: string;
}
