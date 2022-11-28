import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV1RssBillsIdRssPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiV1RssBillsIdRssRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1RssBillsIdRssPathParams;
}


export class GetApiV1RssBillsIdRssResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
