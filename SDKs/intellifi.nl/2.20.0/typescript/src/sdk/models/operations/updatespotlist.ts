import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSpotListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSpotListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSpotListPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SpotList;
}


export class UpdateSpotListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
