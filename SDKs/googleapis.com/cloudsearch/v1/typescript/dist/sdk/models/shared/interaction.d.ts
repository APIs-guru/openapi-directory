import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
export declare enum InteractionTypeEnum {
    Unspecified = "UNSPECIFIED",
    View = "VIEW",
    Edit = "EDIT"
}
/**
 * Represents an interaction between a user and an item.
**/
export declare class Interaction extends SpeakeasyBase {
    interactionTime?: string;
    principal?: Principal;
    type?: InteractionTypeEnum;
}
