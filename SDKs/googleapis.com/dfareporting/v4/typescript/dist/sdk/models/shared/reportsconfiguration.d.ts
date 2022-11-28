import { SpeakeasyBase } from "../../../internal/utils";
import { LookbackConfiguration } from "./lookbackconfiguration";
/**
 * Reporting Configuration
**/
export declare class ReportsConfiguration extends SpeakeasyBase {
    exposureToConversionEnabled?: boolean;
    lookbackConfiguration?: LookbackConfiguration;
    reportGenerationTimeZoneId?: string;
}
