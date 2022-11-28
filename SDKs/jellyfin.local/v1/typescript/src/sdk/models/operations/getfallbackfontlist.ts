import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFallbackFontListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFallbackFontListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetFallbackFontListSecurity;
}


export class GetFallbackFontListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FontFile })
  fontFiles?: shared.FontFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}
