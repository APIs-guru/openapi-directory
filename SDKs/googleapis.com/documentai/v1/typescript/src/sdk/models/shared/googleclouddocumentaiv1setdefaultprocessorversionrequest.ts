import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest
/** 
 * Request message for the set default processor version method.
**/
export class GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;
}
