import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
**/
export declare class Environment extends SpeakeasyBase {
    customValues?: Map<string, string>;
}
