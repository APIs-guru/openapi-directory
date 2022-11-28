import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmIdentityProviderInstancesAliasMappersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasMappersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesAliasMappersIdPathParams;
}


export class GetRealmIdentityProviderInstancesAliasMappersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  identityProviderMapperRepresentation?: shared.IdentityProviderMapperRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
