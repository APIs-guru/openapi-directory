import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment
/** 
 * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
**/
export class GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endIndex" })
  endIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: string;
}
