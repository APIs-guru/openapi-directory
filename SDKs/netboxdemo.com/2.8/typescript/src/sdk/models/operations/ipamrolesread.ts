import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRolesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRolesReadPathParams;
}


export class IpamRolesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  role?: shared.Role;

  @Metadata()
  statusCode: number;
}
