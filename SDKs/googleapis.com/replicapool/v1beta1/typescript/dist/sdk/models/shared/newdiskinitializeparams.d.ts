import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Initialization parameters for creating a new disk.
**/
export declare class NewDiskInitializeParams extends SpeakeasyBase {
    diskSizeGb?: string;
    diskType?: string;
    sourceImage?: string;
}
