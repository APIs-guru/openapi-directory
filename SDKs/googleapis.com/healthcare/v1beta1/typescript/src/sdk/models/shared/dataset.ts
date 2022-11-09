import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dataset
/** 
 * A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
**/
export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
