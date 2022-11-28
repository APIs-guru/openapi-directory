import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a location to extract JWT from an API request.
**/
export declare class JwtLocation extends SpeakeasyBase {
    cookie?: string;
    header?: string;
    query?: string;
    valuePrefix?: string;
}
