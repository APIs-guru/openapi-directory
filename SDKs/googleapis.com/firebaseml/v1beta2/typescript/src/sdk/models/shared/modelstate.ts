import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// ModelState
/** 
 * State common to all model types. Includes publishing and validation information.
**/
export class ModelState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validationError" })
  validationError?: Status;
}
