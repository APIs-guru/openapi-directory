import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Digest
/** 
 * Digest information.
**/
export class Digest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algo" })
  algo?: string;

  @SpeakeasyMetadata({ data: "json, name=digestBytes" })
  digestBytes?: string;
}
