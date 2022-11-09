import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCertificatesCreateCertificateRequestTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class PostCertificatesCreateCertificateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=domain_names" })
  domainNames?: string[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "json, name=type" })
  type?: PostCertificatesCreateCertificateRequestTypeEnum;
}


export class PostCertificatesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostCertificatesCreateCertificateRequest;
}


// PostCertificatesCreateCertificateResponseNullableActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostCertificatesCreateCertificateResponseNullableActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostCertificatesCreateCertificateResponseNullableActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostCertificatesCreateCertificateResponseNullableActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostCertificatesCreateCertificateResponseNullableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostCertificatesCreateCertificateResponseNullableActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostCertificatesCreateCertificateResponseNullableActionResources })
  resources: PostCertificatesCreateCertificateResponseNullableActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum;
}


// PostCertificatesCreateCertificateResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class PostCertificatesCreateCertificateResponseCertificateStatusError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending"
,    Completed = "completed"
,    Failed = "failed"
}

export enum PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled"
,    Pending = "pending"
,    Failed = "failed"
,    Unavailable = "unavailable"
}


// PostCertificatesCreateCertificateResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class PostCertificatesCreateCertificateResponseCertificateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: PostCertificatesCreateCertificateResponseCertificateStatusError;

  @Metadata({ data: "json, name=issuance" })
  issuance?: PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum;

  @Metadata({ data: "json, name=renewal" })
  renewal?: PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum;
}

export enum PostCertificatesCreateCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class PostCertificatesCreateCertificateResponseCertificateUsedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class PostCertificatesCreateCertificateResponseCertificate extends SpeakeasyBase {
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
  status?: PostCertificatesCreateCertificateResponseCertificateStatus;

  @Metadata({ data: "json, name=type" })
  type?: PostCertificatesCreateCertificateResponseCertificateTypeEnum;

  @Metadata({ data: "json, name=used_by", elemType: operations.PostCertificatesCreateCertificateResponseCertificateUsedBy })
  usedBy: PostCertificatesCreateCertificateResponseCertificateUsedBy[];
}


export class PostCertificatesCreateCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostCertificatesCreateCertificateResponseNullableAction;

  @Metadata({ data: "json, name=certificate" })
  certificate: PostCertificatesCreateCertificateResponseCertificate;
}


export class PostCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCertificateResponse?: PostCertificatesCreateCertificateResponse;

  @Metadata()
  statusCode: number;
}
