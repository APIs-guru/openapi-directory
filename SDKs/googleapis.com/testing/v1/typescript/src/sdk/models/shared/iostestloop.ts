import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// IosTestLoop
/** 
 * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
**/
export class IosTestLoop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appBundleId" })
  appBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=appIpa" })
  appIpa?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=scenarios" })
  scenarios?: number[];
}
