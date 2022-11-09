import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlockIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blockindex" })
  blockindex: number;
}


export class GetBlockIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBlockIndexPathParams;
}


export class GetBlockIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
