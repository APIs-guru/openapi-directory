import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * The configuration of the canary mode for a service descriptor
**/
export declare class Canary extends SpeakeasyBase {
    enabled: boolean;
    root: string;
    targets: Target[];
    traffic: number;
}
