import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRolesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRolesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Role;
}


export class IpamRolesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  role?: shared.Role;

  @Metadata()
  statusCode: number;
}
