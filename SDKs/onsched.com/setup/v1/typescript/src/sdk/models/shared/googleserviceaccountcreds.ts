import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleServiceAccountCreds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_provider_x509_cert_url" })
  authProviderX509CertUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_uri" })
  authUri?: string;

  @SpeakeasyMetadata({ data: "json, name=client_email" })
  clientEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_x509_cert_url" })
  clientX509CertUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=private_key_id" })
  privateKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=token_uri" })
  tokenUri?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
