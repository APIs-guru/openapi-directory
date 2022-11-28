import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Define the Connectors target endpoint.
**/
export declare class DestinationConfig extends SpeakeasyBase {
    destinations?: Destination[];
    key?: string;
}
