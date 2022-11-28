import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";



// LookupStreamObjectRequest
/** 
 * Request for looking up a specific stream object by its source object identifier.
**/
export class LookupStreamObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceObjectIdentifier" })
  sourceObjectIdentifier?: SourceObjectIdentifier;
}
