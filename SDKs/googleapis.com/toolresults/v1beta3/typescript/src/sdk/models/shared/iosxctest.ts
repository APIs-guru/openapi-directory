import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosXcTest
/** 
 * A test of an iOS application that uses the XCTest framework.
**/
export class IosXcTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=xcodeVersion" })
  xcodeVersion?: string;
}
