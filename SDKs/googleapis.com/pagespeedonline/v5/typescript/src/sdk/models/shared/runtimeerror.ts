import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeError
/** 
 * Message containing a runtime error config.
**/
export class RuntimeError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
