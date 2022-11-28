import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimManufacturersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimManufacturersReadPathParams;
}


export class DcimManufacturersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  manufacturer?: shared.Manufacturer;

  @SpeakeasyMetadata()
  statusCode: number;
}
