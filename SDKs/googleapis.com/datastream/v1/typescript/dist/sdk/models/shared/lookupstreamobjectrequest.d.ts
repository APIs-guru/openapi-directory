import { SpeakeasyBase } from "../../../internal/utils";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";
/**
 * Request for looking up a specific stream object by its source object identifier.
**/
export declare class LookupStreamObjectRequest extends SpeakeasyBase {
    sourceObjectIdentifier?: SourceObjectIdentifier;
}
