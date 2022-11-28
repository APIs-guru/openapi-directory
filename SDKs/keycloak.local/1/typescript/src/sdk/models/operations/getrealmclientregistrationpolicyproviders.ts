import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientRegistrationPolicyProvidersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientRegistrationPolicyProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientRegistrationPolicyProvidersPathParams;
}


export class GetRealmClientRegistrationPolicyProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ComponentTypeRepresentation })
  componentTypeRepresentations?: shared.ComponentTypeRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
