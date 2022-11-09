import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamVrfsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVrfsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVrfsDeletePathParams;
}


export class IpamVrfsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
