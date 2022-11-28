import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidInstrumentationTest
/** 
 * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
**/
export class AndroidInstrumentationTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testPackageId" })
  testPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=testRunnerClass" })
  testRunnerClass?: string;

  @SpeakeasyMetadata({ data: "json, name=testTargets" })
  testTargets?: string[];

  @SpeakeasyMetadata({ data: "json, name=useOrchestrator" })
  useOrchestrator?: boolean;
}
