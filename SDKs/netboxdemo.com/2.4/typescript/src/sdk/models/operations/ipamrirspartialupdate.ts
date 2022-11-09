import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRirsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRirsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Rir;
}


export class IpamRirsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rir?: shared.Rir;

  @Metadata()
  statusCode: number;
}
