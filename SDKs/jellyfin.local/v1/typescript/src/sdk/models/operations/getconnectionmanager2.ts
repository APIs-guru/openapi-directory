import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionManager2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManager2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectionManager2PathParams;
}


export class GetConnectionManager2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectionManager2200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
