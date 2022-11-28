import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeError
/** 
 * Message containing a runtime error config.
**/
export class RuntimeError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
