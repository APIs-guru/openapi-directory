import { SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";
/**
 * Represents a set of quotas for a given project
**/
export declare class PerProjectQuota extends SpeakeasyBase {
    images?: Quota;
    iterations?: Quota;
    projectId?: string;
    tags?: Quota;
}
