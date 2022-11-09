import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PhotoControllerGetPhotoDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class PhotoControllerGetPhotoDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photoID" })
  photoId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class PhotoControllerGetPhotoDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PhotoControllerGetPhotoDownloadPathParams;

  @Metadata()
  queryParams: PhotoControllerGetPhotoDownloadQueryParams;
}


export class PhotoControllerGetPhotoDownloadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
