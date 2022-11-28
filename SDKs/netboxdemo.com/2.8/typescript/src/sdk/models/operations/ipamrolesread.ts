import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamRolesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRolesReadPathParams;
}


export class IpamRolesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  role?: shared.Role;

  @SpeakeasyMetadata()
  statusCode: number;
}
