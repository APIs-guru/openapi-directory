import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";


// GoogleCloudRetailV2CompletionDataInputConfig
/** 
 * The input config source for completion data.
**/
export class GoogleCloudRetailV2CompletionDataInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
}
