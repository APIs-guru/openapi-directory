import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidInstrumentationTest
/** 
 * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
**/
export class AndroidInstrumentationTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=testPackageId" })
  testPackageId?: string;

  @Metadata({ data: "json, name=testRunnerClass" })
  testRunnerClass?: string;

  @Metadata({ data: "json, name=testTargets" })
  testTargets?: string[];

  @Metadata({ data: "json, name=useOrchestrator" })
  useOrchestrator?: boolean;
}
