import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest
/** 
 * Request message for the set default processor version method.
**/
export class GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;
}
