import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LocationInput;
}


export class UpdateLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
