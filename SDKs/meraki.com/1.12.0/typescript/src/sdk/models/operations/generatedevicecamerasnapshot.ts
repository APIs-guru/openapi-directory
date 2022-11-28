import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateDeviceCameraSnapshotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GenerateDeviceCameraSnapshotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullframe" })
  fullframe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}


export class GenerateDeviceCameraSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateDeviceCameraSnapshotPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GenerateDeviceCameraSnapshotRequestBody;
}


export class GenerateDeviceCameraSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  generateDeviceCameraSnapshot202ApplicationJsonObject?: Map<string, any>;
}
