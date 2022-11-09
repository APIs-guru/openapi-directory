import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1TestConfig } from "./googleclouddialogflowcxv3beta1testconfig";


// GoogleCloudDialogflowCxV3beta1TestCase
/** 
 * Represents a test case.
**/
export class GoogleCloudDialogflowCxV3beta1TestCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lastTestResult" })
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=testCaseConversationTurns", elemType: shared.GoogleCloudDialogflowCxV3beta1ConversationTurn })
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];

  @Metadata({ data: "json, name=testConfig" })
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
