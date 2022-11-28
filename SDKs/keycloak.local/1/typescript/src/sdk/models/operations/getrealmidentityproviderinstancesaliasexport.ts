import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmIdentityProviderInstancesAliasExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;
}


export class GetRealmIdentityProviderInstancesAliasExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesAliasExportPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmIdentityProviderInstancesAliasExportQueryParams;
}


export class GetRealmIdentityProviderInstancesAliasExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
