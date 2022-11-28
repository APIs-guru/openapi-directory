import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
**/
export declare class Recipe extends SpeakeasyBase {
    arguments?: Map<string, any>[];
    definedInMaterial?: string;
    entryPoint?: string;
    environment?: Map<string, any>[];
    type?: string;
}
