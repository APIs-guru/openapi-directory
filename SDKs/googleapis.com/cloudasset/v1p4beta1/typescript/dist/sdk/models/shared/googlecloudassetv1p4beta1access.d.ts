import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";
/**
 * An IAM role or permission under analysis.
**/
export declare class GoogleCloudAssetV1p4beta1Access extends SpeakeasyBase {
    analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;
    permission?: string;
    role?: string;
}
