import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraVideoLinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraVideoLinkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp?: Date;
}


export class GetDeviceCameraVideoLinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraVideoLinkPathParams;

  @Metadata()
  queryParams: GetDeviceCameraVideoLinkQueryParams;
}


export class GetDeviceCameraVideoLinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraVideoLink200ApplicationJsonObject?: Map<string, any>;
}
