import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionPostalCodeAreaPostalCodeRange
/** 
 * A range of postal codes that defines the region area.
**/
export class RegionPostalCodeAreaPostalCodeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=begin" })
  begin?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;
}
