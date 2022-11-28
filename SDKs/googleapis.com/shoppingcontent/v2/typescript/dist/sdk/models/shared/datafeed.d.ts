import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedFetchSchedule } from "./datafeedfetchschedule";
import { DatafeedFormat } from "./datafeedformat";
import { DatafeedTarget } from "./datafeedtarget";
/**
 * Datafeed configuration data.
**/
export declare class Datafeed extends SpeakeasyBase {
    attributeLanguage?: string;
    contentLanguage?: string;
    contentType?: string;
    fetchSchedule?: DatafeedFetchSchedule;
    fileName?: string;
    format?: DatafeedFormat;
    id?: string;
    intendedDestinations?: string[];
    kind?: string;
    name?: string;
    targetCountry?: string;
    targets?: DatafeedTarget[];
}
