import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevokedCertificate } from "./revokedcertificate";


export enum CertificateRevocationListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Superseded = "SUPERSEDED"
}


// CertificateRevocationList
/** 
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
**/
export class CertificateRevocationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessUrl" })
  accessUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCrl" })
  pemCrl?: string;

  @SpeakeasyMetadata({ data: "json, name=revokedCertificates", elemType: RevokedCertificate })
  revokedCertificates?: RevokedCertificate[];

  @SpeakeasyMetadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CertificateRevocationListStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
