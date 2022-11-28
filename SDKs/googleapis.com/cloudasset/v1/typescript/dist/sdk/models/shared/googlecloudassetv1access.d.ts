import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
/**
 * An IAM role or permission under analysis.
**/
export declare class GoogleCloudAssetV1Access extends SpeakeasyBase {
    analysisState?: IamPolicyAnalysisState;
    permission?: string;
    role?: string;
}
