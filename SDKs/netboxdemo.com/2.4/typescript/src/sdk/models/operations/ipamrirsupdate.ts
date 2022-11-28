import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamRirsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRirsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RirInput;
}


export class IpamRirsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rir?: shared.Rir;

  @SpeakeasyMetadata()
  statusCode: number;
}
