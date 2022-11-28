import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStatusCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=codes" })
  codes: string;
}


export class PostStatusCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStatusCodesPathParams;
}


export class PostStatusCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
