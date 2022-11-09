import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";


// GoogleCloudRetailV2betaCompletionDataInputConfig
/** 
 * The input config source for completion data.
**/
export class GoogleCloudRetailV2betaCompletionDataInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
}
