import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStatusCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PostStatusCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStatusCodesPathParams;
}


export class PostStatusCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
