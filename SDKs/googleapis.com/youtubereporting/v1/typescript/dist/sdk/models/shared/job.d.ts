import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A job creating reports of a specific type.
**/
export declare class Job extends SpeakeasyBase {
    createTime?: string;
    expireTime?: string;
    id?: string;
    name?: string;
    reportTypeId?: string;
    systemManaged?: boolean;
}
