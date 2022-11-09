import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmUsersIdFederatedIdentityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdFederatedIdentityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdFederatedIdentityPathParams;
}


export class GetRealmUsersIdFederatedIdentityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FederatedIdentityRepresentation })
  federatedIdentityRepresentations?: shared.FederatedIdentityRepresentation[];

  @Metadata()
  statusCode: number;
}
