import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaClientCertificate } from "./googlecloudintegrationsv1alphaclientcertificate";


export enum GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Expired = "EXPIRED"
}


// GoogleCloudIntegrationsV1alphaCertificate
/** 
 * The certificate definition
**/
export class GoogleCloudIntegrationsV1alphaCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateStatus" })
  certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=credentialId" })
  credentialId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rawCertificate" })
  rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;

  @SpeakeasyMetadata({ data: "json, name=requestorId" })
  requestorId?: string;

  @SpeakeasyMetadata({ data: "json, name=validEndTime" })
  validEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validStartTime" })
  validStartTime?: string;
}


// GoogleCloudIntegrationsV1alphaCertificateInput
/** 
 * The certificate definition
**/
export class GoogleCloudIntegrationsV1alphaCertificateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateStatus" })
  certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=credentialId" })
  credentialId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=rawCertificate" })
  rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;

  @SpeakeasyMetadata({ data: "json, name=requestorId" })
  requestorId?: string;
}
