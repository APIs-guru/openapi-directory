import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Blob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blob_key" })
  blobKey?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_last_accessed" })
  timeLastAccessed?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=upload_url" })
  uploadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class BlobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blob_key" })
  blobKey?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;
}
