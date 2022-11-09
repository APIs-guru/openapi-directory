import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Object } from "./object";
/**
 * Conditions that must be met for this operation to execute.
**/
export declare class ComposeRequestSourceObjectsObjectPreconditions extends SpeakeasyBase {
    ifGenerationMatch?: string;
}
export declare class ComposeRequestSourceObjects extends SpeakeasyBase {
    generation?: string;
    name?: string;
    objectPreconditions?: ComposeRequestSourceObjectsObjectPreconditions;
}
/**
 * A Compose request.
**/
export declare class ComposeRequest extends SpeakeasyBase {
    destination?: Object;
    kind?: string;
    sourceObjects?: ComposeRequestSourceObjects[];
}
