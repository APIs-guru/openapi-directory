import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamServicesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamServicesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamServicesDeletePathParams;
}


export class IpamServicesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
