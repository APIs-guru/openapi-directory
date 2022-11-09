import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVrfsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVrfsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVrfsReadPathParams;
}


export class IpamVrfsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vrf?: shared.Vrf;
}
