import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddItemIdsSpotListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddItemIdsSpotListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddItemIdsSpotListPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class AddItemIdsSpotListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseListResource?: shared.ResponseListResource;

  @Metadata()
  statusCode: number;
}
