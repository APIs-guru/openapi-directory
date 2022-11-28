import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";


export enum GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1TestCaseResultInput
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3beta1TestCaseResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurnInput })
  conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurnInput[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;

  @SpeakeasyMetadata({ data: "json, name=testTime" })
  testTime?: string;
}


// GoogleCloudDialogflowCxV3beta1TestCaseResult
/** 
 * Represents a result from running a test case in an agent environment.
**/
export class GoogleCloudDialogflowCxV3beta1TestCaseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurn })
  conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testResult" })
  testResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;

  @SpeakeasyMetadata({ data: "json, name=testTime" })
  testTime?: string;
}
