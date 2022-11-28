import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiateServiceGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class InitiateServiceGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: InitiateServiceGroupSecurity;
}


export class InitiateServiceGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}
