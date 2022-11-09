import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosXcTest
/** 
 * A test of an iOS application that uses the XCTest framework.
**/
export class IosXcTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=xcodeVersion" })
  xcodeVersion?: string;
}
