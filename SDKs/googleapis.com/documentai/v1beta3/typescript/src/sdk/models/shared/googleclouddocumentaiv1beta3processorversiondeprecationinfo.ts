import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo
/** 
 * Information about the upcoming deprecation of this processor version.
**/
export class GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecationTime" })
  deprecationTime?: string;

  @Metadata({ data: "json, name=replacementProcessorVersion" })
  replacementProcessorVersion?: string;
}
