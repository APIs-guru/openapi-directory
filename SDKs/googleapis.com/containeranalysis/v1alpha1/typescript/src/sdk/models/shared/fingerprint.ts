import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Fingerprint
/** 
 * A set of properties that uniquely identify a given Docker image.
**/
export class Fingerprint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v1Name" })
  v1Name?: string;

  @SpeakeasyMetadata({ data: "json, name=v2Blob" })
  v2Blob?: string[];

  @SpeakeasyMetadata({ data: "json, name=v2Name" })
  v2Name?: string;
}
