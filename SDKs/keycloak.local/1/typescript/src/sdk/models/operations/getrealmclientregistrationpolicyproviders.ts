import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientRegistrationPolicyProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientRegistrationPolicyProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientRegistrationPolicyProvidersPathParams;
}


export class GetRealmClientRegistrationPolicyProvidersResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ComponentTypeRepresentation })
  componentTypeRepresentations?: shared.ComponentTypeRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
