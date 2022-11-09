import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestLdapConnectionRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=bindCredential" })
  bindCredential?: string;

  @Metadata({ data: "json, name=bindDn" })
  bindDn?: string;

  @Metadata({ data: "json, name=componentId" })
  componentId?: string;

  @Metadata({ data: "json, name=connectionTimeout" })
  connectionTimeout?: string;

  @Metadata({ data: "json, name=connectionUrl" })
  connectionUrl?: string;

  @Metadata({ data: "json, name=startTls" })
  startTls?: string;

  @Metadata({ data: "json, name=useTruststoreSpi" })
  useTruststoreSpi?: string;
}
