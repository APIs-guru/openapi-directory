import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadSubtitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UploadSubtitleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  uploadSubtitleDto?: shared.UploadSubtitleDto;

  @Metadata({ data: "request, media_type=application/json" })
  uploadSubtitleDto1?: shared.UploadSubtitleDto;

  @Metadata({ data: "request, media_type=text/json" })
  uploadSubtitleDto2?: shared.UploadSubtitleDto;
}


export class UploadSubtitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadSubtitlePathParams;

  @Metadata()
  request: UploadSubtitleRequests;
}


export class UploadSubtitleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
