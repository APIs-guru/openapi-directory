import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment
/** 
 * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
**/
export class GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=endIndex" })
  endIndex?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: string;
}
