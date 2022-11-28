import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LookbackConfiguration } from "./lookbackconfiguration";



// ReportsConfiguration
/** 
 * Reporting Configuration
**/
export class ReportsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exposureToConversionEnabled" })
  exposureToConversionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=reportGenerationTimeZoneId" })
  reportGenerationTimeZoneId?: string;
}
