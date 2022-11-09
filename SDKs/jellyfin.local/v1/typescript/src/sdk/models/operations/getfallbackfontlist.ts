import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFallbackFontListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFallbackFontListRequest extends SpeakeasyBase {
  @Metadata()
  security: GetFallbackFontListSecurity;
}


export class GetFallbackFontListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FontFile })
  fontFiles?: shared.FontFile[];

  @Metadata()
  statusCode: number;
}
