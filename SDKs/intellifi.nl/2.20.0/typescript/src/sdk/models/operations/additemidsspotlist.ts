import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddItemIdsSpotListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddItemIdsSpotListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddItemIdsSpotListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class AddItemIdsSpotListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseListResource?: shared.ResponseListResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
