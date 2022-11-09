import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddItemListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemList;
}


export class AddItemListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
