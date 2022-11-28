import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";



// GoogleCloudDatalabelingV1beta1Dataset
/** 
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
**/
export class GoogleCloudDatalabelingV1beta1Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataItemCount" })
  dataItemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: GoogleCloudDatalabelingV1beta1InputConfig })
  inputConfigs?: GoogleCloudDatalabelingV1beta1InputConfig[];

  @SpeakeasyMetadata({ data: "json, name=lastMigrateTime" })
  lastMigrateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
