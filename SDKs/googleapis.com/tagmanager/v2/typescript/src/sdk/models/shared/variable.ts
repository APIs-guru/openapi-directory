import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VariableFormatValue } from "./variableformatvalue";
import { Parameter } from "./parameter";


// Variable
/** 
 * Represents a Google Tag Manager Variable.
**/
export class Variable extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=disablingTriggerId" })
  disablingTriggerId?: string[];

  @Metadata({ data: "json, name=enablingTriggerId" })
  enablingTriggerId?: string[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=formatValue" })
  formatValue?: VariableFormatValue;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parameter", elemType: shared.Parameter })
  parameter?: Parameter[];

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @Metadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=variableId" })
  variableId?: string;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
