import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCertificatesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// GetCertificatesIdCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class GetCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}

export enum GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}


// GetCertificatesIdCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class GetCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetCertificatesIdCertificateResponseCertificateStatusError;

  @SpeakeasyMetadata({ data: "json, name=issuance" })
  issuance?: GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;

  @SpeakeasyMetadata({ data: "json, name=renewal" })
  renewal?: GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}

export enum GetCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class GetCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class GetCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
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
  status?: GetCertificatesIdCertificateResponseCertificateStatus;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetCertificatesIdCertificateResponseCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=used_by", elemType: GetCertificatesIdCertificateResponseCertificateUsedBy })
  usedBy: GetCertificatesIdCertificateResponseCertificateUsedBy[];
}


export class GetCertificatesIdCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: GetCertificatesIdCertificateResponseCertificate;
}


export class GetCertificatesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCertificatesIdPathParams;
}


export class GetCertificatesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateResponse?: GetCertificatesIdCertificateResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
