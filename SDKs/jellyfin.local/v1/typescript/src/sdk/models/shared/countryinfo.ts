import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CountryInfo
/** 
 * Class CountryInfo.
**/
export class CountryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ThreeLetterISORegionName" })
  threeLetterIsoRegionName?: string;

  @SpeakeasyMetadata({ data: "json, name=TwoLetterISORegionName" })
  twoLetterIsoRegionName?: string;
}
