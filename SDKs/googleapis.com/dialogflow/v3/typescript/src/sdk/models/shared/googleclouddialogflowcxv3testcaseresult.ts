import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";


export enum GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3TestCaseResultInput
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3TestCaseResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3ConversationTurnInput })
  conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;

  @SpeakeasyMetadata({ data: "json, name=testTime" })
  testTime?: string;
}


// GoogleCloudDialogflowCxV3TestCaseResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3TestCaseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3ConversationTurn })
  conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;

  @SpeakeasyMetadata({ data: "json, name=testTime" })
  testTime?: string;
}
