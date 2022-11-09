import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBrandingCssResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBrandingCss200ApplicationJsonString?: string;

  @Metadata()
  getBrandingCss200TextCssString?: string;

  @Metadata()
  statusCode: number;
}
