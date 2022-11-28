import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ElectoralDistrictScopeEnum {
    Statewide = "statewide",
    Congressional = "congressional",
    StateUpper = "stateUpper",
    StateLower = "stateLower",
    Countywide = "countywide",
    Judicial = "judicial",
    SchoolBoard = "schoolBoard",
    Citywide = "citywide",
    Special = "special",
    CountyCouncil = "countyCouncil",
    Township = "township",
    Ward = "ward",
    CityCouncil = "cityCouncil",
    National = "national"
}
/**
 * Describes the geographic scope of a contest.
**/
export declare class ElectoralDistrict extends SpeakeasyBase {
    id?: string;
    name?: string;
    scope?: ElectoralDistrictScopeEnum;
}
