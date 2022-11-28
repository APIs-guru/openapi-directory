import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest
/** 
 * Request message for the set default processor version method.
**/
export class GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;
}
