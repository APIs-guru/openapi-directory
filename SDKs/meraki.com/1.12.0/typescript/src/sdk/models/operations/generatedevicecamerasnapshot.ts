import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateDeviceCameraSnapshotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GenerateDeviceCameraSnapshotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullframe" })
  fullframe?: boolean;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}


export class GenerateDeviceCameraSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateDeviceCameraSnapshotPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GenerateDeviceCameraSnapshotRequestBody;
}


export class GenerateDeviceCameraSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  generateDeviceCameraSnapshot202ApplicationJsonObject?: Map<string, any>;
}
