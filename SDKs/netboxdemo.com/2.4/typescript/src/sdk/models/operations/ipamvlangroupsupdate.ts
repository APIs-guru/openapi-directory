import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVlanGroupsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlanGroupsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVlanGroup;
}


export class IpamVlanGroupsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vlanGroup?: shared.VlanGroup;
}
