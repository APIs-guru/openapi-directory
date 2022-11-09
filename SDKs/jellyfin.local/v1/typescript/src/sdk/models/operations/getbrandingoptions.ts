import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBrandingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  brandingOptions?: shared.BrandingOptions;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
