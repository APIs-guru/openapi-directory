import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionManager3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManager3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectionManager3PathParams;
}


export class GetConnectionManager3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectionManager3200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
