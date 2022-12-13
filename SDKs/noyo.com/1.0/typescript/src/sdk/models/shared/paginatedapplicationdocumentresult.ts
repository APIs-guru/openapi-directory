import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDocumentResult } from "./applicationdocumentresult";



// PaginatedApplicationDocumentResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedApplicationDocumentResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedApplicationDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedApplicationDocumentResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: ApplicationDocumentResult })
  response: ApplicationDocumentResult[];
}
