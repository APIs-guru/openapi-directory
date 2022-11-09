import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";


// Macro
/** 
 * Represents a Google Tag Manager Macro.
**/
export class Macro extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=disablingRuleId" })
  disablingRuleId?: string[];

  @Metadata({ data: "json, name=enablingRuleId" })
  enablingRuleId?: string[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=macroId" })
  macroId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parameter", elemType: shared.Parameter })
  parameter?: Parameter[];

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=scheduleEndMs" })
  scheduleEndMs?: string;

  @Metadata({ data: "json, name=scheduleStartMs" })
  scheduleStartMs?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
