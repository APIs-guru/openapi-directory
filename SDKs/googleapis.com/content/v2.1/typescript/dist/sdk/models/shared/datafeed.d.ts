import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedFetchSchedule } from "./datafeedfetchschedule";
import { DatafeedFormat } from "./datafeedformat";
import { DatafeedTarget } from "./datafeedtarget";
/**
 * Datafeed configuration data.
**/
export declare class Datafeed extends SpeakeasyBase {
    attributeLanguage?: string;
    contentType?: string;
    fetchSchedule?: DatafeedFetchSchedule;
    fileName?: string;
    format?: DatafeedFormat;
    id?: string;
    kind?: string;
    name?: string;
    targets?: DatafeedTarget[];
}
