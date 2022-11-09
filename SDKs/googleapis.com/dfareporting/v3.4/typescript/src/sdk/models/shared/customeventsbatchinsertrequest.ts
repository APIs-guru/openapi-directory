import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomEvent } from "./customevent";


// CustomEventsBatchInsertRequest
/** 
 * Insert Custom Events Request.
**/
export class CustomEventsBatchInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customEvents", elemType: shared.CustomEvent })
  customEvents?: CustomEvent[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
