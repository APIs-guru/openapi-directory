import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventorySafetyStockHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventorySafetyStockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventorySafetyStockHeaders;
}


export class PostInventorySafetyStockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
