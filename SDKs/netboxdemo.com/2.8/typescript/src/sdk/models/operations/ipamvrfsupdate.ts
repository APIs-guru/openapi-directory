import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamVrfsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVrfsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVrfsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVrf;
}


export class IpamVrfsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vrf?: shared.Vrf;
}
