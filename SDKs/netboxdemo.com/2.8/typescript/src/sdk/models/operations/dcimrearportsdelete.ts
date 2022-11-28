import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimRearPortsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRearPortsDeletePathParams;
}


export class DcimRearPortsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
