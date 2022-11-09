import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainRecordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class GetDomainRecordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetDomainRecordsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDomainRecordsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDomainRecordsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDomainRecordsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDomainRecordsSecurityOption2;
}


export class GetDomainRecordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainRecordsPathParams;

  @Metadata()
  queryParams: GetDomainRecordsQueryParams;

  @Metadata()
  security: GetDomainRecordsSecurity;
}


export class GetDomainRecords200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.DomainRecord })
  data?: shared.DomainRecord[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetDomainRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomainRecords200ApplicationJsonObject?: GetDomainRecords200ApplicationJson;
}
