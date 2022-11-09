import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimDeviceBaysDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBaysDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBaysDeletePathParams;
}


export class DcimDeviceBaysDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
