import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";


// LookupStreamObjectRequest
/** 
 * Request for looking up a specific stream object by its source object identifier.
**/
export class LookupStreamObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceObjectIdentifier" })
  sourceObjectIdentifier?: SourceObjectIdentifier;
}
