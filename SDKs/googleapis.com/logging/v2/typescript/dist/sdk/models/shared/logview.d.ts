import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a view over log entries in a bucket.
**/
export declare class LogView extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    filter?: string;
    name?: string;
    updateTime?: string;
}
/**
 * Describes a view over log entries in a bucket.
**/
export declare class LogViewInput extends SpeakeasyBase {
    description?: string;
    filter?: string;
    name?: string;
}
