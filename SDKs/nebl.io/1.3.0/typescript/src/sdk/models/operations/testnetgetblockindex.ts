import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetBlockIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blockindex" })
  blockindex: number;
}


export class TestnetGetBlockIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetBlockIndexPathParams;
}


export class TestnetGetBlockIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
