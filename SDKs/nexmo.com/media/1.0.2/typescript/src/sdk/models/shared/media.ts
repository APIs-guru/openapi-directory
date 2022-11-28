import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=max_downloads_allowed" })
  maxDownloadsAllowed?: number;

  @SpeakeasyMetadata({ data: "json, name=media_size" })
  mediaSize?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata_primary" })
  metadataPrimary?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata_secondary" })
  metadataSecondary?: string;

  @SpeakeasyMetadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=original_file_name" })
  originalFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=store_id" })
  storeId?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_last_updated" })
  timeLastUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=times_downloaded" })
  timesDownloaded?: number;
}
