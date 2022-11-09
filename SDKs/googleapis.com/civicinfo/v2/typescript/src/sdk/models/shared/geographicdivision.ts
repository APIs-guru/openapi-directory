import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeographicDivision
/** 
 * Describes a political geography.
**/
export class GeographicDivision extends SpeakeasyBase {
  @Metadata({ data: "json, name=alsoKnownAs" })
  alsoKnownAs?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=officeIndices" })
  officeIndices?: number[];
}
