import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlsaBuilder
/** 
 * SlsaBuilder encapsulates the identity of the builder of this provenance.
**/
export class SlsaBuilder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
