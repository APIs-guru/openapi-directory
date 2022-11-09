import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFirstUser2Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFirstUser2Request extends SpeakeasyBase {
  @Metadata()
  security: GetFirstUser2Security;
}


export class GetFirstUser2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  startupUserDto?: shared.StartupUserDto;

  @Metadata()
  statusCode: number;
}
