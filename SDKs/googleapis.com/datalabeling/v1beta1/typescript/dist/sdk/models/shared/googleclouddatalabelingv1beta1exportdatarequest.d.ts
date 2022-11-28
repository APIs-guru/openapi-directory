import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1OutputConfig } from "./googleclouddatalabelingv1beta1outputconfig";
/**
 * Request message for ExportData API.
**/
export declare class GoogleCloudDatalabelingV1beta1ExportDataRequest extends SpeakeasyBase {
    annotatedDataset?: string;
    filter?: string;
    outputConfig?: GoogleCloudDatalabelingV1beta1OutputConfig;
    userEmailAddress?: string;
}
