import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditLocationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LocationEditRequest;
}


export class EditLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationResult?: shared.LocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
