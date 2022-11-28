import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestLdapConnectionRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=bindCredential" })
  bindCredential?: string;

  @SpeakeasyMetadata({ data: "json, name=bindDn" })
  bindDn?: string;

  @SpeakeasyMetadata({ data: "json, name=componentId" })
  componentId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionTimeout" })
  connectionTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionUrl" })
  connectionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=startTls" })
  startTls?: string;

  @SpeakeasyMetadata({ data: "json, name=useTruststoreSpi" })
  useTruststoreSpi?: string;
}
