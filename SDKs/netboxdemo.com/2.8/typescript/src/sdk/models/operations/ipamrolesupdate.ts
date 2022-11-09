import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRolesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRolesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Role;
}


export class IpamRolesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  role?: shared.Role;

  @Metadata()
  statusCode: number;
}
