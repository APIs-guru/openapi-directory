import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";


// GoogleCloudDatalabelingV1beta1Dataset
/** 
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
**/
export class GoogleCloudDatalabelingV1beta1Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataItemCount" })
  dataItemCount?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=inputConfigs", elemType: shared.GoogleCloudDatalabelingV1beta1InputConfig })
  inputConfigs?: GoogleCloudDatalabelingV1beta1InputConfig[];

  @Metadata({ data: "json, name=lastMigrateTime" })
  lastMigrateTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
