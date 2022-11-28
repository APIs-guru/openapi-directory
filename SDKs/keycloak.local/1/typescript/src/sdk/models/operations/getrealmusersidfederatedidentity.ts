import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmUsersIdFederatedIdentityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdFederatedIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdFederatedIdentityPathParams;
}


export class GetRealmUsersIdFederatedIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FederatedIdentityRepresentation })
  federatedIdentityRepresentations?: shared.FederatedIdentityRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
