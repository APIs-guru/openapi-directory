import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification for modifying HTTP header in HTTP request and HTTP response.
**/
export declare class HttpRouteHeaderModifier extends SpeakeasyBase {
    add?: Map<string, string>;
    remove?: string[];
    set?: Map<string, string>;
}
