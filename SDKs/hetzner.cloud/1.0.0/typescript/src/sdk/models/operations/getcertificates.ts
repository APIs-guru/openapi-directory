import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCertificatesSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}

export enum GetCertificatesTypeParameterTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class GetCertificatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" })
  labelSelector?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCertificatesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetCertificatesTypeParameterTypeEnum;
}


// GetCertificatesCertificatesResponseCertificateStatusError
/** 
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
export class GetCertificatesCertificatesResponseCertificateStatusError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}

export enum GetCertificatesCertificatesResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}


// GetCertificatesCertificatesResponseCertificateStatus
/** 
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
export class GetCertificatesCertificatesResponseCertificateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: GetCertificatesCertificatesResponseCertificateStatusError;

  @SpeakeasyMetadata({ data: "json, name=issuance" })
  issuance?: GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum;

  @SpeakeasyMetadata({ data: "json, name=renewal" })
  renewal?: GetCertificatesCertificatesResponseCertificateStatusRenewalEnum;
}

export enum GetCertificatesCertificatesResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}


export class GetCertificatesCertificatesResponseCertificateUsedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class GetCertificatesCertificatesResponseCertificate extends SpeakeasyBase {
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
  status?: GetCertificatesCertificatesResponseCertificateStatus;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetCertificatesCertificatesResponseCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=used_by", elemType: GetCertificatesCertificatesResponseCertificateUsedBy })
  usedBy: GetCertificatesCertificatesResponseCertificateUsedBy[];
}


export class GetCertificatesCertificatesResponseMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetCertificatesCertificatesResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetCertificatesCertificatesResponseMetaPagination;
}


export class GetCertificatesCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: GetCertificatesCertificatesResponseCertificate })
  certificates: GetCertificatesCertificatesResponseCertificate[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetCertificatesCertificatesResponseMeta;
}


export class GetCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCertificatesQueryParams;
}


export class GetCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificatesResponse?: GetCertificatesCertificatesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
