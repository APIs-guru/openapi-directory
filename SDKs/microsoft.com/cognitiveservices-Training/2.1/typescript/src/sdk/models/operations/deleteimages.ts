import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds: string[];
}


export class DeleteImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteImagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImagesPathParams;

  @Metadata()
  queryParams: DeleteImagesQueryParams;

  @Metadata()
  headers: DeleteImagesHeaders;
}


export class DeleteImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
