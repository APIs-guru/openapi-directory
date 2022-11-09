import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blockhash" })
  blockhash: string;
}


export class GetBlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBlockPathParams;
}


export class GetBlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlockResponse?: shared.GetBlockResponse;
}
