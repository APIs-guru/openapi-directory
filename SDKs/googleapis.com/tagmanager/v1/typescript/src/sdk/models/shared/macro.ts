import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



// Macro
/** 
 * Represents a Google Tag Manager Macro.
**/
export class Macro extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=disablingRuleId" })
  disablingRuleId?: string[];

  @SpeakeasyMetadata({ data: "json, name=enablingRuleId" })
  enablingRuleId?: string[];

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=macroId" })
  macroId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter })
  parameter?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
