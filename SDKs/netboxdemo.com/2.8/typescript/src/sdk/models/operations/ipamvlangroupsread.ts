import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVlanGroupsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlanGroupsReadPathParams;
}


export class IpamVlanGroupsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vlanGroup?: shared.VlanGroup;
}
