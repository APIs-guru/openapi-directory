import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamRolesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRolesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRolesDeletePathParams;
}


export class IpamRolesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
