import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlockIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blockindex" })
  blockindex: number;
}


export class GetBlockIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlockIndexPathParams;
}


export class GetBlockIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
