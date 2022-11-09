import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventorySafetyStockHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventorySafetyStockRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventorySafetyStockHeaders;
}


export class PostInventorySafetyStockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
