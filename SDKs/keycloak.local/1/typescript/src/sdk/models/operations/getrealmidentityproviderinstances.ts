import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmIdentityProviderInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmIdentityProviderInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmIdentityProviderInstancesPathParams;
}


export class GetRealmIdentityProviderInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.IdentityProviderRepresentation })
  identityProviderRepresentations?: shared.IdentityProviderRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
