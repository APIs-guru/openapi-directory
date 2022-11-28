import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimManufacturersUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimManufacturersUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManufacturerInput;
}


export class DcimManufacturersUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  manufacturer?: shared.Manufacturer;

  @SpeakeasyMetadata()
  statusCode: number;
}
