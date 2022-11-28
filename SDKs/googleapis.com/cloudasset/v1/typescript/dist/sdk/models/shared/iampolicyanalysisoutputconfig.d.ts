import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1BigQueryDestination } from "./googlecloudassetv1bigquerydestination";
import { GoogleCloudAssetV1GcsDestination } from "./googlecloudassetv1gcsdestination";
/**
 * Output configuration for export IAM policy analysis destination.
**/
export declare class IamPolicyAnalysisOutputConfig extends SpeakeasyBase {
    bigqueryDestination?: GoogleCloudAssetV1BigQueryDestination;
    gcsDestination?: GoogleCloudAssetV1GcsDestination;
}
