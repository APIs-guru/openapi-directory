import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimDeviceBaysDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBaysDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceBaysDeletePathParams;
}


export class DcimDeviceBaysDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
