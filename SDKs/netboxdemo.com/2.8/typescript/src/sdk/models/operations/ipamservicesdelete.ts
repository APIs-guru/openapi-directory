import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamServicesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamServicesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamServicesDeletePathParams;
}


export class IpamServicesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
