import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIconIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetIconIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIconIdPathParams;
}


export class GetIconIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getIconId200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
