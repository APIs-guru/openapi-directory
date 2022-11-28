import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcsObject
/** 
 * Cloud Storage object representation.
**/
export class GcsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=generationNumber" })
  generationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
