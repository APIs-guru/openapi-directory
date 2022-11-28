import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContentDirectory3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectory3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentDirectory3PathParams;
}


export class GetContentDirectory3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentDirectory3200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
