import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamRirsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRirsReadPathParams;
}


export class IpamRirsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rir?: shared.Rir;

  @SpeakeasyMetadata()
  statusCode: number;
}
