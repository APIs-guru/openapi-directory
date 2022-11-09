import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamVlanGroupsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlanGroupsDeletePathParams;
}


export class IpamVlanGroupsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
