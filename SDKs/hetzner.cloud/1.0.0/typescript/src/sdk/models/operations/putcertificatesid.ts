import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutCertificatesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCertificatesIdUpdateCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// PutCertificatesIdCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class PutCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}

export enum PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}


// PutCertificatesIdCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class PutCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: PutCertificatesIdCertificateResponseCertificateStatusError;

  @SpeakeasyMetadata({ data: "json, name=issuance" })
  issuance?: PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;

  @SpeakeasyMetadata({ data: "json, name=renewal" })
  renewal?: PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}

export enum PutCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class PutCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class PutCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=domain_names" })
  domainNames: string[];

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=not_valid_after" })
  notValidAfter: string;

  @SpeakeasyMetadata({ data: "json, name=not_valid_before" })
  notValidBefore: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PutCertificatesIdCertificateResponseCertificateStatus;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PutCertificatesIdCertificateResponseCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=used_by", elemType: PutCertificatesIdCertificateResponseCertificateUsedBy })
  usedBy: PutCertificatesIdCertificateResponseCertificateUsedBy[];
}


export class PutCertificatesIdCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: PutCertificatesIdCertificateResponseCertificate;
}


export class PutCertificatesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCertificatesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutCertificatesIdUpdateCertificateRequest;
}


export class PutCertificatesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateResponse?: PutCertificatesIdCertificateResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
