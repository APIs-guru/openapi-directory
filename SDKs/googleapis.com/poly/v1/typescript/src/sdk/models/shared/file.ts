import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// File
/** 
 * Represents a file in Poly, which can be a root, resource, or thumbnail file.
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=relativePath" })
  relativePath?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
