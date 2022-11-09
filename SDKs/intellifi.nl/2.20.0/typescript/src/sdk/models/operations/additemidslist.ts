import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddItemIdsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddItemIdsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddItemIdsListPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class AddItemIdsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseListResource?: shared.ResponseListResource;

  @Metadata()
  statusCode: number;
}
