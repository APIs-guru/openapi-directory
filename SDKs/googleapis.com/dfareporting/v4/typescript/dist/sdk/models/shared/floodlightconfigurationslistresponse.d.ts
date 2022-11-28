import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightConfiguration } from "./floodlightconfiguration";
/**
 * Floodlight Configuration List Response
**/
export declare class FloodlightConfigurationsListResponse extends SpeakeasyBase {
    floodlightConfigurations?: FloodlightConfiguration[];
    kind?: string;
}
