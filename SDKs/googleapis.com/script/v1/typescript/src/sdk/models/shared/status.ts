import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Status
/** 
 * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
