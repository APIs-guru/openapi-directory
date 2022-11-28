import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimManufacturersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManufacturerInput;
}


export class DcimManufacturersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  manufacturer?: shared.Manufacturer;

  @SpeakeasyMetadata()
  statusCode: number;
}
