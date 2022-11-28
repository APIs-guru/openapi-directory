import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
 *
**/
export declare class UserDefinedField extends SpeakeasyBase {
    default?: string;
    example: string;
    label: string;
    manyOf?: string;
    name: string;
    oneOf?: string;
}
