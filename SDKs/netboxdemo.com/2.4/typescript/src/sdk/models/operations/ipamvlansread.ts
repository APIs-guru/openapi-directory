import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVlansReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlansReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlansReadPathParams;
}


export class IpamVlansReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vlan?: shared.Vlan;
}
