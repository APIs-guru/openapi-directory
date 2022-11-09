import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesGraphsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesGraphsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesGraphsPathParams;
}


export class DcimInterfacesGraphsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInterface?: shared.DeviceInterface;

  @Metadata()
  statusCode: number;
}
