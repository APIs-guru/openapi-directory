import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Status
/** 
 * If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.
**/
export class Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}
