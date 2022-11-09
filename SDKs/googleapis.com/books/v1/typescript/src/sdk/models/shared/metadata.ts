import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MetadataItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=encrypted_key" })
  encryptedKey?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.MetadataItems })
  items?: MetadataItems[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
