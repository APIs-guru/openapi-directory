import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamVrfsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamVrfsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamVrfsDeletePathParams;
}


export class IpamVrfsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
