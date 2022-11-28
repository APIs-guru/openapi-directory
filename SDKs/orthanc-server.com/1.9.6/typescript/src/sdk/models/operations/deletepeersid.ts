import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePeersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePeersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePeersIdPathParams;
}


export class DeletePeersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
