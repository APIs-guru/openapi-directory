import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams;
}


export class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @Metadata()
  statusCode: number;
}
