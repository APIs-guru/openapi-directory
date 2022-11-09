import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimManufacturersPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimManufacturersPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Manufacturer;
}


export class DcimManufacturersPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  manufacturer?: shared.Manufacturer;

  @Metadata()
  statusCode: number;
}
