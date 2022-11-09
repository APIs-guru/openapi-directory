import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamRirsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamRirsDeletePathParams;
}


export class IpamRirsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
