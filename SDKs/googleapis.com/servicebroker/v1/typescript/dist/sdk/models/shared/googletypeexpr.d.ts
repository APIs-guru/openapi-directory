import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an expression text. Example:
 *
 *     title: "User account presence"
 *     description: "Determines whether the request has a user account"
 *     expression: "size(request.user) > 0"
**/
export declare class GoogleTypeExpr extends SpeakeasyBase {
    description?: string;
    expression?: string;
    location?: string;
    title?: string;
}
