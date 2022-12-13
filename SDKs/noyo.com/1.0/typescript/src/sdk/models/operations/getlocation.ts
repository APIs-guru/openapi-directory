import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class GetLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLocationPathParams;
}


export class GetLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationResult?: shared.LocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
