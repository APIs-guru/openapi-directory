import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraVideoLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraVideoLinkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetDeviceCameraVideoLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraVideoLinkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceCameraVideoLinkQueryParams;
}


export class GetDeviceCameraVideoLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraVideoLink200ApplicationJsonObject?: Map<string, any>;
}
