import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Artifact
/** 
 * Artifact describes a build product.
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=names" })
  names?: string[];
}
