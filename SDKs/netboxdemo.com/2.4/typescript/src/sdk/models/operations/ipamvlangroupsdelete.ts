import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamVlanGroupsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamVlanGroupsDeletePathParams;
}


export class IpamVlanGroupsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
