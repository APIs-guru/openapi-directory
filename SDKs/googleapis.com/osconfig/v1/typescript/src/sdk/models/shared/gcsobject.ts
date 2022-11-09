import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsObject
/** 
 * Cloud Storage object representation.
**/
export class GcsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=generationNumber" })
  generationNumber?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
