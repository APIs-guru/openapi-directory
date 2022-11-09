import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsExportOptions } from "./nfsexportoptions";
export declare enum ShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore share.
**/
export declare class Share extends SpeakeasyBase {
    capacityGb?: string;
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    mountName?: string;
    name?: string;
    nfsExportOptions?: NfsExportOptions[];
    state?: ShareStateEnum;
}
