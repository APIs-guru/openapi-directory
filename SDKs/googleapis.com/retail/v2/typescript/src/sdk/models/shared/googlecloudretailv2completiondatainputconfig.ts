import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";



// GoogleCloudRetailV2CompletionDataInputConfig
/** 
 * The input config source for completion data.
**/
export class GoogleCloudRetailV2CompletionDataInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
}
