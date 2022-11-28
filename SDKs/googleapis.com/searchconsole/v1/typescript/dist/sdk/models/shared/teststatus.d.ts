import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TestStatusStatusEnum {
    TestStatusUnspecified = "TEST_STATUS_UNSPECIFIED",
    Complete = "COMPLETE",
    InternalError = "INTERNAL_ERROR",
    PageUnreachable = "PAGE_UNREACHABLE"
}
/**
 * Final state of the test, including error details if necessary.
**/
export declare class TestStatus extends SpeakeasyBase {
    details?: string;
    status?: TestStatusStatusEnum;
}
