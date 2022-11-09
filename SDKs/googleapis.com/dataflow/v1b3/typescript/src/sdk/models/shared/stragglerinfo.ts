import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StragglerDebuggingInfo } from "./stragglerdebugginginfo";


// StragglerInfo
/** 
 * Information useful for straggler identification and debugging.
**/
export class StragglerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=causes", elemType: shared.StragglerDebuggingInfo })
  causes?: Map<string, StragglerDebuggingInfo>;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
