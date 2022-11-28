import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFallbackFontPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetFallbackFontSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFallbackFontRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFallbackFontPathParams;

  @SpeakeasyMetadata()
  security: GetFallbackFontSecurity;
}


export class GetFallbackFontResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFallbackFont200FontWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
