import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimManufacturersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimManufacturersReadPathParams;
}


export class DcimManufacturersReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  manufacturer?: shared.Manufacturer;

  @Metadata()
  statusCode: number;
}
