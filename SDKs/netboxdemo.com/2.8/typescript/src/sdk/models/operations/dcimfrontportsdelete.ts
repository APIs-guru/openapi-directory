import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimFrontPortsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortsDeletePathParams;
}


export class DcimFrontPortsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
