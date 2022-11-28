import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagementPermissionReference;
}


export class PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managementPermissionReference?: shared.ManagementPermissionReference;

  @SpeakeasyMetadata()
  statusCode: number;
}
