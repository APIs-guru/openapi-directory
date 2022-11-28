import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackGroupsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackGroupsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackGroupInput;
}


export class DcimRackGroupsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackGroup?: shared.RackGroup;

  @SpeakeasyMetadata()
  statusCode: number;
}
