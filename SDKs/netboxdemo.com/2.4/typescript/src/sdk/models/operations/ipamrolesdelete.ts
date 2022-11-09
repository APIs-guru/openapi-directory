import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamRolesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRolesDeletePathParams;
}


export class IpamRolesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
