import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamRirsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRirsReadPathParams;
}


export class IpamRirsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rir?: shared.Rir;

  @Metadata()
  statusCode: number;
}
