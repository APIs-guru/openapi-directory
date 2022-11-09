import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteNetworksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworksIdPathParams;
}


export class DeleteNetworksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
