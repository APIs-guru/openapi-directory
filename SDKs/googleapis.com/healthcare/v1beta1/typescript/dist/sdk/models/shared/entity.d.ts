import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The candidate entities that an entity mention could link to.
**/
export declare class Entity extends SpeakeasyBase {
    entityId?: string;
    preferredTerm?: string;
    vocabularyCodes?: string[];
}
