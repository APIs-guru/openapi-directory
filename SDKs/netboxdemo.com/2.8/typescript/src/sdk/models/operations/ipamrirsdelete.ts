import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamRirsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamRirsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamRirsDeletePathParams;
}


export class IpamRirsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
