import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimDeviceTypesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceTypesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceTypesDeletePathParams;
}


export class DcimDeviceTypesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
