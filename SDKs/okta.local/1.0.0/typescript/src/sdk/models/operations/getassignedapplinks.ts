import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAssignedAppLinksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetAssignedAppLinksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAssignedAppLinksPathParams;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class GetAssignedAppLinksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
