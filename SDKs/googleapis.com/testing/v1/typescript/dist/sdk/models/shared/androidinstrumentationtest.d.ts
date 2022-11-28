import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { AppBundle } from "./appbundle";
import { ShardingOption } from "./shardingoption";
export declare enum AndroidInstrumentationTestOrchestratorOptionEnum {
    OrchestratorOptionUnspecified = "ORCHESTRATOR_OPTION_UNSPECIFIED",
    UseOrchestrator = "USE_ORCHESTRATOR",
    DoNotUseOrchestrator = "DO_NOT_USE_ORCHESTRATOR"
}
/**
 * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
**/
export declare class AndroidInstrumentationTest extends SpeakeasyBase {
    appApk?: FileReference;
    appBundle?: AppBundle;
    appPackageId?: string;
    orchestratorOption?: AndroidInstrumentationTestOrchestratorOptionEnum;
    shardingOption?: ShardingOption;
    testApk?: FileReference;
    testPackageId?: string;
    testRunnerClass?: string;
    testTargets?: string[];
}
