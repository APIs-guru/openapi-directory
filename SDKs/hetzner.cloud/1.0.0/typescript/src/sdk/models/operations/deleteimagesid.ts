import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImagesIdPathParams;
}


export class DeleteImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
