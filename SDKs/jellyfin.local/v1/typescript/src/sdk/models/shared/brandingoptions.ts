import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BrandingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomCss" })
  customCss?: string;

  @SpeakeasyMetadata({ data: "json, name=LoginDisclaimer" })
  loginDisclaimer?: string;
}
