import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetBlockIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockindex" })
  blockindex: number;
}


export class TestnetGetBlockIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetBlockIndexPathParams;
}


export class TestnetGetBlockIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
