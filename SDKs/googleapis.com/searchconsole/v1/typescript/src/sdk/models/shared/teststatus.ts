import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TestStatusStatusEnum {
    TestStatusUnspecified = "TEST_STATUS_UNSPECIFIED",
    Complete = "COMPLETE",
    InternalError = "INTERNAL_ERROR",
    PageUnreachable = "PAGE_UNREACHABLE"
}


// TestStatus
/** 
 * Final state of the test, including error details if necessary.
**/
export class TestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TestStatusStatusEnum;
}
