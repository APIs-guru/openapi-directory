import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRearPortsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortsDeletePathParams;
}


export class DcimRearPortsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
