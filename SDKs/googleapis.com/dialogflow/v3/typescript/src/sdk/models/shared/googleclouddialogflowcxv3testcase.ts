import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3TestConfig } from "./googleclouddialogflowcxv3testconfig";


// GoogleCloudDialogflowCxV3TestCase
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3TestCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=testCaseConversationTurns", elemType: shared.GoogleCloudDialogflowCxV3ConversationTurn })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];

  @Metadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
