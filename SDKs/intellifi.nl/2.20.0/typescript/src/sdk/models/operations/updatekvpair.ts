import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateKvPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateKvPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateKvPairPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.KeyValuePairUpdate;
}


export class UpdateKvPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
