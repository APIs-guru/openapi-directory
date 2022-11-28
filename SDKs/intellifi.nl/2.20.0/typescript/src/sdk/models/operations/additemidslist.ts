import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddItemIdsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddItemIdsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddItemIdsListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class AddItemIdsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseListResource?: shared.ResponseListResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
