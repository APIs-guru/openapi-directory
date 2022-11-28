import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimFrontPortsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimFrontPortsDeletePathParams;
}


export class DcimFrontPortsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
