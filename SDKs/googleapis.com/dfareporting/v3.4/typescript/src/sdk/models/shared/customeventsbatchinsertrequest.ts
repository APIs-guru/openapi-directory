import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEvent } from "./customevent";



// CustomEventsBatchInsertRequest
/** 
 * Insert Custom Events Request.
**/
export class CustomEventsBatchInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customEvents", elemType: CustomEvent })
  customEvents?: CustomEvent[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
