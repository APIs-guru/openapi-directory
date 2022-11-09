import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// ModelState
/** 
 * State common to all model types. Includes publishing and validation information.
**/
export class ModelState extends SpeakeasyBase {
  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=validationError" })
  validationError?: Status;
}
