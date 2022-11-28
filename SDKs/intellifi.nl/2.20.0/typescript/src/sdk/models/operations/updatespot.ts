import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSpotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpotPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SpotUpdateInput;
}


export class UpdateSpotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
