import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Lien represents an encumbrance on the actions that can be performed on a resource.
**/
export declare class Lien extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    origin?: string;
    parent?: string;
    reason?: string;
    restrictions?: string[];
}
