import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";



// GoogleCloudRetailV2betaCompletionDataInputConfig
/** 
 * The input config source for completion data.
**/
export class GoogleCloudRetailV2betaCompletionDataInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
}
