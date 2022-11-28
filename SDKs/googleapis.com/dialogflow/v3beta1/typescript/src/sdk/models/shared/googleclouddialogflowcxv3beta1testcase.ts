import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCaseResultInput } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1TestConfig } from "./googleclouddialogflowcxv3beta1testconfig";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";



// GoogleCloudDialogflowCxV3beta1TestCaseInput
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3beta1TestCaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurnInput })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurnInput[];

  @SpeakeasyMetadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}


// GoogleCloudDialogflowCxV3beta1TestCase
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3beta1TestCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3beta1ConversationTurn })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];

  @SpeakeasyMetadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
