import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSpotsetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSpotsetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSpotsetsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SpotSetUpdate;
}


export class PutSpotsetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
