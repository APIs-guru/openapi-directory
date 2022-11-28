import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Request object for creating a new network.
**/
export declare class GoogleChromePolicyVersionsV1DefineNetworkRequest extends SpeakeasyBase {
    name?: string;
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    targetResource?: string;
}
