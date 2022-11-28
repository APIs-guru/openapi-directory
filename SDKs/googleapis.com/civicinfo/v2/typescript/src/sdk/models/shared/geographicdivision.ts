import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeographicDivision
/** 
 * Describes a political geography.
**/
export class GeographicDivision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alsoKnownAs" })
  alsoKnownAs?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=officeIndices" })
  officeIndices?: number[];
}
