import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
**/
export declare class AndroidInstrumentationTest extends SpeakeasyBase {
    testPackageId?: string;
    testRunnerClass?: string;
    testTargets?: string[];
    useOrchestrator?: boolean;
}
