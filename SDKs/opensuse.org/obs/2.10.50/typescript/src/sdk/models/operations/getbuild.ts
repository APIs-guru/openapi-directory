import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBuildSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetBuildSecurity;
}


export class GetBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
