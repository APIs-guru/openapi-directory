import { SpeakeasyBase } from "../../../internal/utils";
import { GcsDestinationConfig } from "./gcsdestinationconfig";
/**
 * The configuration of the stream destination.
**/
export declare class DestinationConfig extends SpeakeasyBase {
    destinationConnectionProfileName?: string;
    gcsDestinationConfig?: GcsDestinationConfig;
}
