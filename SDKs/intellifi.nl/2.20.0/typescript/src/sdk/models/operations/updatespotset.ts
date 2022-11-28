import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpotSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=setId" })
  setId: string;
}


export class UpdateSpotSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpotSetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetUpdate;
}


export class UpdateSpotSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
