import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
/**
 * Provides GKE Node Pool information.
**/
export declare class NodePool extends SpeakeasyBase {
    name?: string;
    nodes?: Node[];
}
