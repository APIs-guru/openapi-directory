import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest
/** 
 * Request message for the set default processor version method.
**/
export class GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;
}
