import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVlanGroupsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlanGroupsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlanGroupsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVlanGroup;
}


export class IpamVlanGroupsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vlanGroup?: shared.VlanGroup;
}
