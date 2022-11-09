import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=max_downloads_allowed" })
  maxDownloadsAllowed?: number;

  @Metadata({ data: "json, name=media_size" })
  mediaSize?: number;

  @Metadata({ data: "json, name=metadata_primary" })
  metadataPrimary?: string;

  @Metadata({ data: "json, name=metadata_secondary" })
  metadataSecondary?: string;

  @Metadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @Metadata({ data: "json, name=original_file_name" })
  originalFileName?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=store_id" })
  storeId?: string;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_last_updated" })
  timeLastUpdated?: string;

  @Metadata({ data: "json, name=times_downloaded" })
  timesDownloaded?: number;
}
