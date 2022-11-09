import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TestStatusStatusEnum {
    TestStatusUnspecified = "TEST_STATUS_UNSPECIFIED"
,    Complete = "COMPLETE"
,    InternalError = "INTERNAL_ERROR"
,    PageUnreachable = "PAGE_UNREACHABLE"
}


// TestStatus
/** 
 * Final state of the test, including error details if necessary.
**/
export class TestStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=status" })
  status?: TestStatusStatusEnum;
}
