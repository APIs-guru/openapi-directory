import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRun } from "./cloudrun";
import { Gke } from "./gke";
/**
 * Represents a target of an invocation over HTTP.
**/
export declare class Destination extends SpeakeasyBase {
    cloudFunction?: string;
    cloudRun?: CloudRun;
    gke?: Gke;
    workflow?: string;
}
