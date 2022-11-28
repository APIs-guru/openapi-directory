import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhotoControllerGetPhotoDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class PhotoControllerGetPhotoDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photoID" })
  photoId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class PhotoControllerGetPhotoDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhotoControllerGetPhotoDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: PhotoControllerGetPhotoDownloadQueryParams;
}


export class PhotoControllerGetPhotoDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
