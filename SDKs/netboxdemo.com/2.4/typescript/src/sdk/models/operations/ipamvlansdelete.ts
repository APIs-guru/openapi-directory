import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamVlansDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlansDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamVlansDeletePathParams;
}


export class IpamVlansDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
