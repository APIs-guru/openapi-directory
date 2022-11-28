import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * A resource type supported by Deployment Manager.
**/
export declare class Type extends SpeakeasyBase {
    id?: string;
    insertTime?: string;
    name?: string;
    operation?: Operation;
    selfLink?: string;
}
