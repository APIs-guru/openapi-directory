import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Object containing node sync status
**/
export declare class GetSyncResponse extends SpeakeasyBase {
    blockChainHeight?: number;
    error?: string;
    height?: number;
    status?: string;
    syncPercentage?: number;
    type?: string;
}
