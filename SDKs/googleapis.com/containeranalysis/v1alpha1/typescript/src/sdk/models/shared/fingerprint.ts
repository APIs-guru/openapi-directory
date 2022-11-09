import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Fingerprint
/** 
 * A set of properties that uniquely identify a given Docker image.
**/
export class Fingerprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=v1Name" })
  v1Name?: string;

  @Metadata({ data: "json, name=v2Blob" })
  v2Blob?: string[];

  @Metadata({ data: "json, name=v2Name" })
  v2Name?: string;
}
