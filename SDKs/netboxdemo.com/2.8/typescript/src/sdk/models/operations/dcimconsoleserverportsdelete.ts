import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimConsoleServerPortsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsoleServerPortsDeletePathParams;
}


export class DcimConsoleServerPortsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
