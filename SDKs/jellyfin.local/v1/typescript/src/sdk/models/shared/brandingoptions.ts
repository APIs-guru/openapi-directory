import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BrandingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomCss" })
  customCss?: string;

  @Metadata({ data: "json, name=LoginDisclaimer" })
  loginDisclaimer?: string;
}
