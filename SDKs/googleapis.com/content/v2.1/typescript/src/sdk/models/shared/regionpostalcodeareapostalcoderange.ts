import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionPostalCodeAreaPostalCodeRange
/** 
 * A range of postal codes that defines the region area.
**/
export class RegionPostalCodeAreaPostalCodeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=begin" })
  begin?: string;

  @Metadata({ data: "json, name=end" })
  end?: string;
}
