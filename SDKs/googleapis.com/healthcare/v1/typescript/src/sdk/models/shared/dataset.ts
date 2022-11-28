import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dataset
/** 
 * A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
**/
export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
