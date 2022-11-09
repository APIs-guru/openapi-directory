import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPeersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPeersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPeersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutPeersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
