import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1GcsDestination } from "./googleclouddatalabelingv1beta1gcsdestination";
import { GoogleCloudDatalabelingV1beta1GcsFolderDestination } from "./googleclouddatalabelingv1beta1gcsfolderdestination";


// GoogleCloudDatalabelingV1beta1OutputConfig
/** 
 * The configuration of output data.
**/
export class GoogleCloudDatalabelingV1beta1OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;

  @Metadata({ data: "json, name=gcsFolderDestination" })
  gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
}
