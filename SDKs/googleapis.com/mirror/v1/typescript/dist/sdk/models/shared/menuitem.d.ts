import { SpeakeasyBase } from "../../../internal/utils";
import { MenuValue } from "./menuvalue";
/**
 * A custom menu item that can be presented to the user by a timeline item.
**/
export declare class MenuItem extends SpeakeasyBase {
    action?: string;
    contextualCommand?: string;
    id?: string;
    payload?: string;
    removeWhenSelected?: boolean;
    values?: MenuValue[];
}
