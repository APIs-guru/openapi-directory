import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Blob extends SpeakeasyBase {
  @Metadata({ data: "json, name=blob_key" })
  blobKey?: string;

  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_last_accessed" })
  timeLastAccessed?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=upload_url" })
  uploadUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
