import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCertificatesCreateCertificateRequestTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class PostCertificatesCreateCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=domain_names" })
  domainNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostCertificatesCreateCertificateRequestTypeEnum;
}


// PostCertificatesCreateCertificateResponseNullableActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostCertificatesCreateCertificateResponseNullableActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostCertificatesCreateCertificateResponseNullableActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostCertificatesCreateCertificateResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostCertificatesCreateCertificateResponseNullableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostCertificatesCreateCertificateResponseNullableActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostCertificatesCreateCertificateResponseNullableActionResources })
  resources: PostCertificatesCreateCertificateResponseNullableActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum;
}


// PostCertificatesCreateCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class PostCertificatesCreateCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}

export enum PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}


// PostCertificatesCreateCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class PostCertificatesCreateCertificateResponseCertificateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: PostCertificatesCreateCertificateResponseCertificateStatusError;

  @SpeakeasyMetadata({ data: "json, name=issuance" })
  issuance?: PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum;

  @SpeakeasyMetadata({ data: "json, name=renewal" })
  renewal?: PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum;
}

export enum PostCertificatesCreateCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class PostCertificatesCreateCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class PostCertificatesCreateCertificateResponseCertificate extends SpeakeasyBase {
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
  status?: PostCertificatesCreateCertificateResponseCertificateStatus;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostCertificatesCreateCertificateResponseCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=used_by", elemType: PostCertificatesCreateCertificateResponseCertificateUsedBy })
  usedBy: PostCertificatesCreateCertificateResponseCertificateUsedBy[];
}


export class PostCertificatesCreateCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostCertificatesCreateCertificateResponseNullableAction;

  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: PostCertificatesCreateCertificateResponseCertificate;
}


export class PostCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCertificatesCreateCertificateRequest;
}


export class PostCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCertificateResponse?: PostCertificatesCreateCertificateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
