import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDefaultDirectoryBrowserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultDirectoryBrowserRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDefaultDirectoryBrowserSecurity;
}


export class GetDefaultDirectoryBrowserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  defaultDirectoryBrowserInfoDto?: shared.DefaultDirectoryBrowserInfoDto;

  @Metadata()
  statusCode: number;
}
