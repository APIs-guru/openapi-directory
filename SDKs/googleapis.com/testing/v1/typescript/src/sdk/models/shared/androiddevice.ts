import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidDevice
/** 
 * A single Android device.
**/
export class AndroidDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidModelId" })
  androidModelId?: string;

  @Metadata({ data: "json, name=androidVersionId" })
  androidVersionId?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=orientation" })
  orientation?: string;
}
