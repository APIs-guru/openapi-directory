import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadSubtitlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UploadSubtitleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  uploadSubtitleDto?: shared.UploadSubtitleDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  uploadSubtitleDto1?: shared.UploadSubtitleDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  uploadSubtitleDto2?: shared.UploadSubtitleDto;
}


export class UploadSubtitleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadSubtitlePathParams;

  @SpeakeasyMetadata()
  request: UploadSubtitleRequests;
}


export class UploadSubtitleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
