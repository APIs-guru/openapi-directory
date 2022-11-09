import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamServicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamServicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamServicesReadPathParams;
}


export class IpamServicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  service?: shared.Service;

  @Metadata()
  statusCode: number;
}
