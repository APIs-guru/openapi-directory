import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0"
**/
export declare class Expr extends SpeakeasyBase {
    description?: string;
    expression?: string;
    location?: string;
    title?: string;
}
