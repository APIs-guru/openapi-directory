import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ElectoralDistrictScopeEnum {
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


// ElectoralDistrict
/** 
 * Describes the geographic scope of a contest.
**/
export class ElectoralDistrict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ElectoralDistrictScopeEnum;
}
