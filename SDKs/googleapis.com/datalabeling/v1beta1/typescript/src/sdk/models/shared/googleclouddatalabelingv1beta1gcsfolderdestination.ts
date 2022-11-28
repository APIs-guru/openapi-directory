import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1GcsFolderDestination
/** 
 * Export folder destination of the data.
**/
export class GoogleCloudDatalabelingV1beta1GcsFolderDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputFolderUri" })
  outputFolderUri?: string;
}
