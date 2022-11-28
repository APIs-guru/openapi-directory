import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosTestLoop
/** 
 * A game loop test of an iOS application.
**/
export class IosTestLoop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;
}
