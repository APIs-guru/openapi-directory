import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaClientCertificate } from "./googlecloudintegrationsv1alphaclientcertificate";

export enum GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Expired = "EXPIRED"
}


// GoogleCloudIntegrationsV1alphaCertificate
/** 
 * The certificate definition
**/
export class GoogleCloudIntegrationsV1alphaCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateStatus" })
  certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;

  @Metadata({ data: "json, name=credentialId" })
  credentialId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rawCertificate" })
  rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;

  @Metadata({ data: "json, name=requestorId" })
  requestorId?: string;

  @Metadata({ data: "json, name=validEndTime" })
  validEndTime?: string;

  @Metadata({ data: "json, name=validStartTime" })
  validStartTime?: string;
}
