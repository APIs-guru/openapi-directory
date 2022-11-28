import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestinationConfig } from "./bigquerydestinationconfig";
import { GcsDestinationConfig } from "./gcsdestinationconfig";
/**
 * The configuration of the stream destination.
**/
export declare class DestinationConfig extends SpeakeasyBase {
    bigqueryDestinationConfig?: BigQueryDestinationConfig;
    destinationConnectionProfile?: string;
    gcsDestinationConfig?: GcsDestinationConfig;
}
