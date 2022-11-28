import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpotListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSpotListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpotListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SpotListInput;
}


export class UpdateSpotListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
