import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBrandingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  brandingOptions?: shared.BrandingOptions;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
