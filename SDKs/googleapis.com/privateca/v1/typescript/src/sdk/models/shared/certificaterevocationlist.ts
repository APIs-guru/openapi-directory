import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RevokedCertificate } from "./revokedcertificate";

export enum CertificateRevocationListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Superseded = "SUPERSEDED"
}


// CertificateRevocationList
/** 
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
**/
export class CertificateRevocationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessUrl" })
  accessUrl?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pemCrl" })
  pemCrl?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=revokedCertificates", elemType: shared.RevokedCertificate })
  revokedCertificates?: RevokedCertificate[];

  @Metadata({ data: "json, name=sequenceNumber" })
  sequenceNumber?: string;

  @Metadata({ data: "json, name=state" })
  state?: CertificateRevocationListStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
