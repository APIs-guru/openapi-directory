import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Source
/** 
 * Specification of traffic source attributes.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipBlocks" })
  ipBlocks?: string[];

  @Metadata({ data: "json, name=principals" })
  principals?: string[];
}
