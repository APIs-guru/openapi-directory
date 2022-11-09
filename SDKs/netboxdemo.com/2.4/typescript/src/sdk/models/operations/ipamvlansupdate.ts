import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVlansUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlansUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlansUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVlan;
}


export class IpamVlansUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vlan?: shared.Vlan;
}
