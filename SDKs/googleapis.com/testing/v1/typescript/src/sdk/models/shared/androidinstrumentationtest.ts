import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { ShardingOption } from "./shardingoption";


export enum AndroidInstrumentationTestOrchestratorOptionEnum {
    OrchestratorOptionUnspecified = "ORCHESTRATOR_OPTION_UNSPECIFIED",
    UseOrchestrator = "USE_ORCHESTRATOR",
    DoNotUseOrchestrator = "DO_NOT_USE_ORCHESTRATOR"
}


// AndroidInstrumentationTest
/** 
 * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
**/
export class AndroidInstrumentationTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appApk" })
  appApk?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=appBundle" })
  appBundle?: AppBundle;

  @SpeakeasyMetadata({ data: "json, name=appPackageId" })
  appPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=orchestratorOption" })
  orchestratorOption?: AndroidInstrumentationTestOrchestratorOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=shardingOption" })
  shardingOption?: ShardingOption;

  @SpeakeasyMetadata({ data: "json, name=testApk" })
  testApk?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=testPackageId" })
  testPackageId?: string;

  @SpeakeasyMetadata({ data: "json, name=testRunnerClass" })
  testRunnerClass?: string;

  @SpeakeasyMetadata({ data: "json, name=testTargets" })
  testTargets?: string[];
}
