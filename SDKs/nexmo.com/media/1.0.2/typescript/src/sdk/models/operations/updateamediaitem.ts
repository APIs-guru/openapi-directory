import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAMediaItemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=description" })
  description?: string;

  @Metadata({ data: "multipart_form, name=max_downloads_allowed" })
  maxDownloadsAllowed?: number;

  @Metadata({ data: "multipart_form, name=metadata_primary" })
  metadataPrimary?: string;

  @Metadata({ data: "multipart_form, name=metadata_secondary" })
  metadataSecondary?: string;

  @Metadata({ data: "multipart_form, name=mime_type" })
  mimeType?: string;

  @Metadata({ data: "multipart_form, name=public" })
  public?: boolean;

  @Metadata({ data: "multipart_form, name=title" })
  title?: string;
}


export class UpdateAMediaItemRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateAMediaItemRequestBody;
}


export class UpdateAMediaItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
