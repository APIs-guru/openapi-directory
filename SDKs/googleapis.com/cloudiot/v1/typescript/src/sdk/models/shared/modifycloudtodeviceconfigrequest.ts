import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyCloudToDeviceConfigRequest
/** 
 * Request for `ModifyCloudToDeviceConfig`.
**/
export class ModifyCloudToDeviceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @SpeakeasyMetadata({ data: "json, name=versionToUpdate" })
  versionToUpdate?: string;
}
