import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";

export enum GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED"
,    Passed = "PASSED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1TestCaseResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3beta1TestCaseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationTurns", elemType: shared.GoogleCloudDialogflowCxV3beta1ConversationTurn })
  conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;

  @Metadata({ data: "json, name=testTime" })
  testTime?: string;
}
