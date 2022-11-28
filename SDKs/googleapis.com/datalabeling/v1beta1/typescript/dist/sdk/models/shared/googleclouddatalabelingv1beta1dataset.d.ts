import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
/**
 * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
**/
export declare class GoogleCloudDatalabelingV1beta1Dataset extends SpeakeasyBase {
    blockingResources?: string[];
    createTime?: string;
    dataItemCount?: string;
    description?: string;
    displayName?: string;
    inputConfigs?: GoogleCloudDatalabelingV1beta1InputConfig[];
    lastMigrateTime?: string;
    name?: string;
}
