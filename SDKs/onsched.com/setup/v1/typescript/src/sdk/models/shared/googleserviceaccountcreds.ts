import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleServiceAccountCreds extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_provider_x509_cert_url" })
  authProviderX509CertUrl?: string;

  @Metadata({ data: "json, name=auth_uri" })
  authUri?: string;

  @Metadata({ data: "json, name=client_email" })
  clientEmail?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_x509_cert_url" })
  clientX509CertUrl?: string;

  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "json, name=private_key_id" })
  privateKeyId?: string;

  @Metadata({ data: "json, name=project_id" })
  projectId?: string;

  @Metadata({ data: "json, name=token_uri" })
  tokenUri?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
