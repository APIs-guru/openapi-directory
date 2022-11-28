import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDefaultDirectoryBrowserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDefaultDirectoryBrowserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetDefaultDirectoryBrowserSecurity;
}


export class GetDefaultDirectoryBrowserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultDirectoryBrowserInfoDto?: shared.DefaultDirectoryBrowserInfoDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
