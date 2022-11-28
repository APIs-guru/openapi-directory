import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProfilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ProfilesSecurity;
}


export class ProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  profiles?: shared.Profiles;
}
