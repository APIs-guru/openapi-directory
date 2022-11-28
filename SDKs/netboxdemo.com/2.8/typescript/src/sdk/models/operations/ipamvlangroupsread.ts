import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamVlanGroupsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamVlanGroupsReadPathParams;
}


export class IpamVlanGroupsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vlanGroup?: shared.VlanGroup;
}
