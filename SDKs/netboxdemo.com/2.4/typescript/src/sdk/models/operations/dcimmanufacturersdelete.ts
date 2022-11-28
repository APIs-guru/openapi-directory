import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimManufacturersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimManufacturersDeletePathParams;
}


export class DcimManufacturersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
