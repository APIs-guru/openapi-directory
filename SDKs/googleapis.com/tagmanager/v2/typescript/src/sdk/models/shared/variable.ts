import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariableFormatValue } from "./variableformatvalue";
import { Parameter } from "./parameter";



// Variable
/** 
 * Represents a Google Tag Manager Variable.
**/
export class Variable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=disablingTriggerId" })
  disablingTriggerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=enablingTriggerId" })
  enablingTriggerId?: string[];

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=formatValue" })
  formatValue?: VariableFormatValue;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter })
  parameter?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=variableId" })
  variableId?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
