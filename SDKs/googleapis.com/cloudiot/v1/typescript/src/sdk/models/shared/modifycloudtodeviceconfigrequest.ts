import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyCloudToDeviceConfigRequest
/** 
 * Request for `ModifyCloudToDeviceConfig`.
**/
export class ModifyCloudToDeviceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=binaryData" })
  binaryData?: string;

  @Metadata({ data: "json, name=versionToUpdate" })
  versionToUpdate?: string;
}
