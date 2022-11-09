import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceMetadata } from "./sourcemetadata";


// SourceGetMetadataResponse
/** 
 * The result of a SourceGetMetadataOperation.
**/
export class SourceGetMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: SourceMetadata;
}
