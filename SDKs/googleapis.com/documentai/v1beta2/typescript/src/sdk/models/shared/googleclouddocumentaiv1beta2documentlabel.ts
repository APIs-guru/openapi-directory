import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentLabel
/** 
 * Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
**/
export class GoogleCloudDocumentaiV1beta2DocumentLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automlModel" })
  automlModel?: string;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
