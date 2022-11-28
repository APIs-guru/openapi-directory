import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// File
/** 
 * Represents a file in Poly, which can be a root, resource, or thumbnail file.
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
