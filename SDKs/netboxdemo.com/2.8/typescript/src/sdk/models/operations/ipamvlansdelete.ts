import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamVlansDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVlansDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamVlansDeletePathParams;
}


export class IpamVlansDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
