import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosTestLoop
/** 
 * A game loop test of an iOS application.
**/
export class IosTestLoop extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;
}
