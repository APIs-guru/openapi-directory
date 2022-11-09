import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";

export enum GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED"
,    Passed = "PASSED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3TestCaseResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3TestCaseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationTurns", elemType: shared.GoogleCloudDialogflowCxV3ConversationTurn })
  conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;

  @Metadata({ data: "json, name=testTime" })
  testTime?: string;
}
