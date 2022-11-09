import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFallbackFontPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetFallbackFontSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFallbackFontRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFallbackFontPathParams;

  @Metadata()
  security: GetFallbackFontSecurity;
}


export class GetFallbackFontResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFallbackFont200FontWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
