import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilePathParams;

  @Metadata()
  security: GetFileSecurity;
}


export class GetFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFile200AudioWildcardBinaryString?: Uint8Array;

  @Metadata()
  getFile200VideoWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
