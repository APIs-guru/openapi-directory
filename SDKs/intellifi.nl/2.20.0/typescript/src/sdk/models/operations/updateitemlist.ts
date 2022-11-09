import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateItemListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemListPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemList;
}


export class UpdateItemListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
