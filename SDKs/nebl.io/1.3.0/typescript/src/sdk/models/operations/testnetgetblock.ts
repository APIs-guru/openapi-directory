import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockhash" })
  blockhash: string;
}


export class TestnetGetBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetBlockPathParams;
}


export class TestnetGetBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlockResponse?: shared.GetBlockResponse;
}
