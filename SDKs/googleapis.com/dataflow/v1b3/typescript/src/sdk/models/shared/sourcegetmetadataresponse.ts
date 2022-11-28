import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceMetadata } from "./sourcemetadata";



// SourceGetMetadataResponse
/** 
 * The result of a SourceGetMetadataOperation.
**/
export class SourceGetMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: SourceMetadata;
}
