import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3TestConfig } from "./googleclouddialogflowcxv3testconfig";
import { GoogleCloudDialogflowCxV3TestCaseResultInput } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";



// GoogleCloudDialogflowCxV3TestCase
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3TestCase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3ConversationTurn })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];

  @SpeakeasyMetadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}


// GoogleCloudDialogflowCxV3TestCaseInput
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3TestCaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResultInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=testCaseConversationTurns", elemType: GoogleCloudDialogflowCxV3ConversationTurnInput })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];

  @SpeakeasyMetadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
