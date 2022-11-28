import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about files that caused a compliance check to fail.
**/
export declare class NonCompliantFile extends SpeakeasyBase {
    displayCommand?: string;
    path?: string;
    reason?: string;
}
