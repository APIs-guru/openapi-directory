import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFirstUser2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFirstUser2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetFirstUser2Security;
}


export class GetFirstUser2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  startupUserDto?: shared.StartupUserDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
