import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1GcsDestination } from "./googleclouddatalabelingv1beta1gcsdestination";
import { GoogleCloudDatalabelingV1beta1GcsFolderDestination } from "./googleclouddatalabelingv1beta1gcsfolderdestination";



// GoogleCloudDatalabelingV1beta1OutputConfig
/** 
 * The configuration of output data.
**/
export class GoogleCloudDatalabelingV1beta1OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=gcsFolderDestination" })
  gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
}
