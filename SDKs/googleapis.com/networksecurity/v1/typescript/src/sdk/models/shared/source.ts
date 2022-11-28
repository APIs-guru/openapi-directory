import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Source
/** 
 * Specification of traffic source attributes.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipBlocks" })
  ipBlocks?: string[];

  @SpeakeasyMetadata({ data: "json, name=principals" })
  principals?: string[];
}
