import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1NetworkSetting } from "./googlechromepolicyversionsv1networksetting";
/**
 * Response object for creating a network.
**/
export declare class GoogleChromePolicyVersionsV1DefineNetworkResponse extends SpeakeasyBase {
    networkId?: string;
    settings?: GoogleChromePolicyVersionsV1NetworkSetting[];
    targetResource?: string;
}
