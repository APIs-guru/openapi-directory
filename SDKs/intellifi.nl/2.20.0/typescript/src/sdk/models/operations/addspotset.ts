import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddSpotSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AddSpotSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddSpotSetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetCreateInput;
}


export class AddSpotSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
