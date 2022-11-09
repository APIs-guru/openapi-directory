import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV1RssBillsIdRssPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiV1RssBillsIdRssRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1RssBillsIdRssPathParams;
}


export class GetApiV1RssBillsIdRssResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
