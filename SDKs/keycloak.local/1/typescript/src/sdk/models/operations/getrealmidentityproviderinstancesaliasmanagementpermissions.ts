import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams;
}


export class GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @SpeakeasyMetadata()
  statusCode: number;
}
