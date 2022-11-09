import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Digest
/** 
 * Digest information.
**/
export class Digest extends SpeakeasyBase {
  @Metadata({ data: "json, name=algo" })
  algo?: string;

  @Metadata({ data: "json, name=digestBytes" })
  digestBytes?: string;
}
