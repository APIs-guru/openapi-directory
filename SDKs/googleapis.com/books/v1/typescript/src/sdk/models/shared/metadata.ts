import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetadataItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted_key" })
  encryptedKey?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: MetadataItems })
  items?: MetadataItems[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
