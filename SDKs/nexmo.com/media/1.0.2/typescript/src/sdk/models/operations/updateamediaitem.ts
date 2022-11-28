import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAMediaItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=max_downloads_allowed" })
  maxDownloadsAllowed?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=metadata_primary" })
  metadataPrimary?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=metadata_secondary" })
  metadataSecondary?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=mime_type" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title?: string;
}


export class UpdateAMediaItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateAMediaItemRequestBody;
}


export class UpdateAMediaItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
