import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CountryInfo
/** 
 * Class CountryInfo.
**/
export class CountryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ThreeLetterISORegionName" })
  threeLetterIsoRegionName?: string;

  @Metadata({ data: "json, name=TwoLetterISORegionName" })
  twoLetterIsoRegionName?: string;
}
