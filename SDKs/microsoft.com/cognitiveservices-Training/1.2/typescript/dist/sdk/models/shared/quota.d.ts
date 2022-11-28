import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a quota
**/
export declare class Quota extends SpeakeasyBase {
    timeUntilReset?: string;
    total?: number;
    used?: number;
}
