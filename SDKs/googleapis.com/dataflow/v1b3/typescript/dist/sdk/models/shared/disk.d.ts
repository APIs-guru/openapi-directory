import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the data disk used by a workflow job.
**/
export declare class Disk extends SpeakeasyBase {
    diskType?: string;
    mountPoint?: string;
    sizeGb?: number;
}
