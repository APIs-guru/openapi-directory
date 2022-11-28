import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
**/
export declare class GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment extends SpeakeasyBase {
    endIndex?: string;
    startIndex?: string;
}
