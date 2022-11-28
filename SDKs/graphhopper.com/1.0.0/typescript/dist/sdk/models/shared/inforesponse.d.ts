import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the server and the geographical area that it covers.
**/
export declare class InfoResponse extends SpeakeasyBase {
    bbox?: string;
    features?: Map<string, any>;
    version?: string;
}
