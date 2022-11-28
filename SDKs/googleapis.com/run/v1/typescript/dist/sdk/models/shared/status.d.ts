import { SpeakeasyBase } from "../../../internal/utils";
import { StatusDetails } from "./statusdetails";
import { ListMeta } from "./listmeta";
/**
 * Status is a return value for calls that don't return other objects.
**/
export declare class Status extends SpeakeasyBase {
    code?: number;
    details?: StatusDetails;
    message?: string;
    metadata?: ListMeta;
    reason?: string;
    status?: string;
}
