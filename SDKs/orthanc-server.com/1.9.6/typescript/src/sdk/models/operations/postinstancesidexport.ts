import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdExportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdExportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdExportPathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class PostInstancesIdExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
