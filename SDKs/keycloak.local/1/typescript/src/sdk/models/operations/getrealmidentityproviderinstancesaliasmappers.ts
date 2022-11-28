import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmIdentityProviderInstancesAliasMappersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesAliasMappersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesAliasMappersPathParams;
}


export class GetRealmIdentityProviderInstancesAliasMappersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IdentityProviderMapperRepresentation })
  identityProviderMapperRepresentations?: shared.IdentityProviderMapperRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
