import { SpeakeasyBase } from "../../../internal/utils";
import { GeoCoordsInput } from "./geocoords";
export declare class SpotUpdateAntennaReportLocationsInput extends SpeakeasyBase {
    antennaNumber?: number;
}
export declare class SpotUpdateInput extends SpeakeasyBase {
    antennaReportLocations?: SpotUpdateAntennaReportLocationsInput[];
    configRequest?: Map<string, any>;
    geoCoords?: GeoCoordsInput;
    reportLocation?: string;
    sensesRequest?: Map<string, any>;
}
