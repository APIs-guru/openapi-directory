import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContentDirectory2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectory2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentDirectory2PathParams;
}


export class GetContentDirectory2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentDirectory2200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
