import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmIdentityProviderInstancesAliasExportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasExportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class GetRealmIdentityProviderInstancesAliasExportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasExportPathParams;

  @Metadata()
  queryParams: GetRealmIdentityProviderInstancesAliasExportQueryParams;
}


export class GetRealmIdentityProviderInstancesAliasExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
