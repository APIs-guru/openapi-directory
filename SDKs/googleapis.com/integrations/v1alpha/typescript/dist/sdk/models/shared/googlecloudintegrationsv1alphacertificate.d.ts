import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaClientCertificate } from "./googlecloudintegrationsv1alphaclientcertificate";
export declare enum GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Expired = "EXPIRED"
}
/**
 * The certificate definition
**/
export declare class GoogleCloudIntegrationsV1alphaCertificate extends SpeakeasyBase {
    certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
    credentialId?: string;
    description?: string;
    displayName?: string;
    name?: string;
    rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;
    requestorId?: string;
    validEndTime?: string;
    validStartTime?: string;
}
/**
 * The certificate definition
**/
export declare class GoogleCloudIntegrationsV1alphaCertificateInput extends SpeakeasyBase {
    certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
    credentialId?: string;
    description?: string;
    displayName?: string;
    rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;
    requestorId?: string;
}
