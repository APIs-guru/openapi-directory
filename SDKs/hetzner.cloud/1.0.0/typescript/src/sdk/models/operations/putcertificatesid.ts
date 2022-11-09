import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutCertificatesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCertificatesIdUpdateCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutCertificatesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCertificatesIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutCertificatesIdUpdateCertificateRequest;
}


// PutCertificatesIdCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class PutCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending"
,    Completed = "completed"
,    Failed = "failed"
}

export enum PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled"
,    Pending = "pending"
,    Failed = "failed"
,    Unavailable = "unavailable"
}


// PutCertificatesIdCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class PutCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: PutCertificatesIdCertificateResponseCertificateStatusError;

  @Metadata({ data: "json, name=issuance" })
  issuance?: PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;

  @Metadata({ data: "json, name=renewal" })
  renewal?: PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}

export enum PutCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class PutCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class PutCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
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
  status?: PutCertificatesIdCertificateResponseCertificateStatus;

  @Metadata({ data: "json, name=type" })
  type?: PutCertificatesIdCertificateResponseCertificateTypeEnum;

  @Metadata({ data: "json, name=used_by", elemType: operations.PutCertificatesIdCertificateResponseCertificateUsedBy })
  usedBy: PutCertificatesIdCertificateResponseCertificateUsedBy[];
}


export class PutCertificatesIdCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: PutCertificatesIdCertificateResponseCertificate;
}


export class PutCertificatesIdResponse extends SpeakeasyBase {
  @Metadata()
  certificateResponse?: PutCertificatesIdCertificateResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
