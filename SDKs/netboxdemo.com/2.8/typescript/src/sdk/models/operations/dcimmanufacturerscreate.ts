import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimManufacturersCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Manufacturer;
}


export class DcimManufacturersCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  manufacturer?: shared.Manufacturer;

  @Metadata()
  statusCode: number;
}
