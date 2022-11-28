import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds: string[];
}


export class DeleteImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteImagesQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteImagesHeaders;
}


export class DeleteImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
