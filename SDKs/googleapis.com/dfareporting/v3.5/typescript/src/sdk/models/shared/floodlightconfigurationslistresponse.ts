import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FloodlightConfiguration } from "./floodlightconfiguration";


// FloodlightConfigurationsListResponse
/** 
 * Floodlight Configuration List Response
**/
export class FloodlightConfigurationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightConfigurations", elemType: shared.FloodlightConfiguration })
  floodlightConfigurations?: FloodlightConfiguration[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
