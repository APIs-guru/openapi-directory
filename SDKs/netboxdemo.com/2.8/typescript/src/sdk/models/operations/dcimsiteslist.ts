import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimSitesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn" })
  asn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__gt" })
  asnGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__gte" })
  asnGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__lt" })
  asnLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__lte" })
  asnLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asn__n" })
  asnN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__ic" })
  contactEmailIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__ie" })
  contactEmailIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__iew" })
  contactEmailIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__isw" })
  contactEmailIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__n" })
  contactEmailN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nic" })
  contactEmailNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nie" })
  contactEmailNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__niew" })
  contactEmailNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_email__nisw" })
  contactEmailNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__ic" })
  contactNameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__ie" })
  contactNameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__iew" })
  contactNameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__isw" })
  contactNameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__n" })
  contactNameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nic" })
  contactNameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nie" })
  contactNameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__niew" })
  contactNameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_name__nisw" })
  contactNameNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone" })
  contactPhone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__ic" })
  contactPhoneIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__ie" })
  contactPhoneIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__iew" })
  contactPhoneIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__isw" })
  contactPhoneIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__n" })
  contactPhoneN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nic" })
  contactPhoneNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nie" })
  contactPhoneNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__niew" })
  contactPhoneNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contact_phone__nisw" })
  contactPhoneNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility" })
  facility?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__ic" })
  facilityIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__ie" })
  facilityIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__iew" })
  facilityIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__isw" })
  facilityIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__n" })
  facilityN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nic" })
  facilityNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nie" })
  facilityNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__niew" })
  facilityNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facility__nisw" })
  facilityNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__gt" })
  latitudeGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__gte" })
  latitudeGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__lt" })
  latitudeLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__lte" })
  latitudeLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latitude__n" })
  latitudeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__gt" })
  longitudeGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__gte" })
  longitudeGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__lt" })
  longitudeLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__lte" })
  longitudeLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longitude__n" })
  longitudeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" })
  tenantGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" })
  tenantGroupN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" })
  tenantGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" })
  tenantGroupIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;
}


export class DcimSitesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Site })
  results: shared.Site[];
}


export class DcimSitesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimSitesListQueryParams;
}


export class DcimSitesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimSitesList200ApplicationJsonObject?: DcimSitesList200ApplicationJson;
}
