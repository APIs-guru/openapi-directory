import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StragglerDebuggingInfo } from "./stragglerdebugginginfo";



// StragglerInfo
/** 
 * Information useful for straggler identification and debugging.
**/
export class StragglerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=causes", elemType: StragglerDebuggingInfo })
  causes?: Map<string, StragglerDebuggingInfo>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
