import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlsaBuilder
/** 
 * SlsaBuilder encapsulates the identity of the builder of this provenance.
**/
export class SlsaBuilder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
