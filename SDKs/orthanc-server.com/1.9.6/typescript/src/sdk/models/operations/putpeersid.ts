import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPeersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPeersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPeersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PutPeersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
