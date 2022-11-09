import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyStoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=keyAlias" })
  keyAlias?: string;

  @Metadata({ data: "json, name=keyPassword" })
  keyPassword?: string;

  @Metadata({ data: "json, name=realmAlias" })
  realmAlias?: string;

  @Metadata({ data: "json, name=realmCertificate" })
  realmCertificate?: boolean;

  @Metadata({ data: "json, name=storePassword" })
  storePassword?: string;
}
