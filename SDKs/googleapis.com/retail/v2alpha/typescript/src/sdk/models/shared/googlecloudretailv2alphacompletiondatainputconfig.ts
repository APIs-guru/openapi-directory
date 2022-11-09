import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";


// GoogleCloudRetailV2alphaCompletionDataInputConfig
/** 
 * The input config source for completion data.
**/
export class GoogleCloudRetailV2alphaCompletionDataInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;
}
