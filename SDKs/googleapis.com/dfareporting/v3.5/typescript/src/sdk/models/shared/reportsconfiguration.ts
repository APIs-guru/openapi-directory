import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LookbackConfiguration } from "./lookbackconfiguration";


// ReportsConfiguration
/** 
 * Reporting Configuration
**/
export class ReportsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=exposureToConversionEnabled" })
  exposureToConversionEnabled?: boolean;

  @Metadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @Metadata({ data: "json, name=reportGenerationTimeZoneId" })
  reportGenerationTimeZoneId?: string;
}
