import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockhash" })
  blockhash: string;
}


export class GetBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlockPathParams;
}


export class GetBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlockResponse?: shared.GetBlockResponse;
}
