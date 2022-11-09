import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRirsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRirsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Rir;
}


export class IpamRirsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rir?: shared.Rir;

  @Metadata()
  statusCode: number;
}
