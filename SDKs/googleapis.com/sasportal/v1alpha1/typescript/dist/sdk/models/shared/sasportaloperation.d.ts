import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalStatus } from "./sasportalstatus";
/**
 * This resource represents a long-running operation that is the result of a network API call.
**/
export declare class SasPortalOperation extends SpeakeasyBase {
    done?: boolean;
    error?: SasPortalStatus;
    metadata?: Map<string, any>;
    name?: string;
    response?: Map<string, any>;
}
