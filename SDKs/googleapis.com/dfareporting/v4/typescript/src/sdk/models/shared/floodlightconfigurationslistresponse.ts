import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloodlightConfiguration } from "./floodlightconfiguration";



// FloodlightConfigurationsListResponse
/** 
 * Floodlight Configuration List Response
**/
export class FloodlightConfigurationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightConfigurations", elemType: FloodlightConfiguration })
  floodlightConfigurations?: FloodlightConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
