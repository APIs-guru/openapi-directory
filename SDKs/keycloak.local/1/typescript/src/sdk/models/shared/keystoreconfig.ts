import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyStoreConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=keyAlias" })
  keyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPassword" })
  keyPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=realmAlias" })
  realmAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=realmCertificate" })
  realmCertificate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=storePassword" })
  storePassword?: string;
}
