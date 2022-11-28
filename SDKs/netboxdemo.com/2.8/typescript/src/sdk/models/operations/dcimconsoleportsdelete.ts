import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimConsolePortsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsolePortsDeletePathParams;
}


export class DcimConsolePortsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
