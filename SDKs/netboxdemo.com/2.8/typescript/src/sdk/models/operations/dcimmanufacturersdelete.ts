import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimManufacturersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimManufacturersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimManufacturersDeletePathParams;
}


export class DcimManufacturersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
