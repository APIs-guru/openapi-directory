import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackRolesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackRolesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RackRoleInput;
}


export class DcimRackRolesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackRole?: shared.RackRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
