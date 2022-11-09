import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blockhash" })
  blockhash: string;
}


export class TestnetGetBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetBlockPathParams;
}


export class TestnetGetBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlockResponse?: shared.GetBlockResponse;
}
