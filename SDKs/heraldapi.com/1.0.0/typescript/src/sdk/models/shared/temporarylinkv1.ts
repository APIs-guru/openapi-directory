import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TemporaryLinkV1
/** 
 * A temporary link for a file, that lasts for 15 minutes. 
**/
export class TemporaryLinkV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}
