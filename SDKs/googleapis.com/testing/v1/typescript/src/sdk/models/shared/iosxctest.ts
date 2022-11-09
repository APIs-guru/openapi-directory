import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";
import { FileReference } from "./filereference";


// IosXcTest
/** 
 * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
**/
export class IosXcTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appBundleId" })
  appBundleId?: string;

  @Metadata({ data: "json, name=testSpecialEntitlements" })
  testSpecialEntitlements?: boolean;

  @Metadata({ data: "json, name=testsZip" })
  testsZip?: FileReference;

  @Metadata({ data: "json, name=xcodeVersion" })
  xcodeVersion?: string;

  @Metadata({ data: "json, name=xctestrun" })
  xctestrun?: FileReference;
}
