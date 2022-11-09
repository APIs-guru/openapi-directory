import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosDevice
/** 
 * A single iOS device.
**/
export class IosDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=iosModelId" })
  iosModelId?: string;

  @Metadata({ data: "json, name=iosVersionId" })
  iosVersionId?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=orientation" })
  orientation?: string;
}
