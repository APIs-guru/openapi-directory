import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamRolesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRolesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RoleInput;
}


export class IpamRolesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  role?: shared.Role;

  @SpeakeasyMetadata()
  statusCode: number;
}
