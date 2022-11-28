import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContentDirectoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentDirectoryPathParams;
}


export class GetContentDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContentDirectory200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
