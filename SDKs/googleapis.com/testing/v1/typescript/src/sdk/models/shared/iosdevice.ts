import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosDevice
/** 
 * A single iOS device.
**/
export class IosDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iosModelId" })
  iosModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=iosVersionId" })
  iosVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: string;
}
