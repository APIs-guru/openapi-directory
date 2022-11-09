import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePeersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeletePeersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePeersIdPathParams;
}


export class DeletePeersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
