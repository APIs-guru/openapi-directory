import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class CreateLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LocationCreateRequest;
}


export class CreateLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationResult?: shared.LocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
