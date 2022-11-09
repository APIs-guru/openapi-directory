import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItemUpdate;
}


export class UpdateItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
