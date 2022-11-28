import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImagesIdPathParams;
}


export class DeleteImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
