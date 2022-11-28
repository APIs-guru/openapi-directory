import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBrandingCssResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getBrandingCss200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  getBrandingCss200TextCssString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
