import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCertificatesSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Name = "name"
,    NameAsc = "name:asc"
,    NameDesc = "name:desc"
,    Created = "created"
,    CreatedAsc = "created:asc"
,    CreatedDesc = "created:desc"
}

export enum GetCertificatesTypeParameterTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class GetCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCertificatesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetCertificatesTypeParameterTypeEnum;
}


export class GetCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCertificatesQueryParams;
}


// GetCertificatesCertificatesResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class GetCertificatesCertificatesResponseCertificateStatusError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

export enum GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum {
    Pending = "pending"
,    Completed = "completed"
,    Failed = "failed"
}

export enum GetCertificatesCertificatesResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled"
,    Pending = "pending"
,    Failed = "failed"
,    Unavailable = "unavailable"
}


// GetCertificatesCertificatesResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class GetCertificatesCertificatesResponseCertificateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: GetCertificatesCertificatesResponseCertificateStatusError;

  @Metadata({ data: "json, name=issuance" })
  issuance?: GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum;

  @Metadata({ data: "json, name=renewal" })
  renewal?: GetCertificatesCertificatesResponseCertificateStatusRenewalEnum;
}

export enum GetCertificatesCertificatesResponseCertificateTypeEnum {
    Uploaded = "uploaded"
,    Managed = "managed"
}


export class GetCertificatesCertificatesResponseCertificateUsedBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class GetCertificatesCertificatesResponseCertificate extends SpeakeasyBase {
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
  status?: GetCertificatesCertificatesResponseCertificateStatus;

  @Metadata({ data: "json, name=type" })
  type?: GetCertificatesCertificatesResponseCertificateTypeEnum;

  @Metadata({ data: "json, name=used_by", elemType: operations.GetCertificatesCertificatesResponseCertificateUsedBy })
  usedBy: GetCertificatesCertificatesResponseCertificateUsedBy[];
}


export class GetCertificatesCertificatesResponseMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetCertificatesCertificatesResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetCertificatesCertificatesResponseMetaPagination;
}


export class GetCertificatesCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: operations.GetCertificatesCertificatesResponseCertificate })
  certificates: GetCertificatesCertificatesResponseCertificate[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetCertificatesCertificatesResponseMeta;
}


export class GetCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  certificatesResponse?: GetCertificatesCertificatesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
