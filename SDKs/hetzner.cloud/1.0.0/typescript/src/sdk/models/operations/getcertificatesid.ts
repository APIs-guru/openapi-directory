import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificatesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCertificatesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCertificatesIdPathParams;
}


// GetCertificatesIdCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class GetCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending"
,    Completed = "completed"
,    Failed = "failed"
}

export enum GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled"
,    Pending = "pending"
,    Failed = "failed"
,    Unavailable = "unavailable"
}


// GetCertificatesIdCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class GetCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetCertificatesIdCertificateResponseCertificateStatusError;

  @Metadata({ data: "json, name=issuance" })
  issuance?: GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;

  @Metadata({ data: "json, name=renewal" })
  renewal?: GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}

export enum GetCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class GetCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class GetCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: string;

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=domain_names" })
  domainNames: string[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=not_valid_after" })
  notValidAfter: string;

  @Metadata({ data: "json, name=not_valid_before" })
  notValidBefore: string;

  @Metadata({ data: "json, name=status" })
  status?: GetCertificatesIdCertificateResponseCertificateStatus;

  @Metadata({ data: "json, name=type" })
  type?: GetCertificatesIdCertificateResponseCertificateTypeEnum;

  @Metadata({ data: "json, name=used_by", elemType: operations.GetCertificatesIdCertificateResponseCertificateUsedBy })
  usedBy: GetCertificatesIdCertificateResponseCertificateUsedBy[];
}


export class GetCertificatesIdCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: GetCertificatesIdCertificateResponseCertificate;
}


export class GetCertificatesIdResponse extends SpeakeasyBase {
  @Metadata()
  certificateResponse?: GetCertificatesIdCertificateResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
