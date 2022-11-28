import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryAmazonIpiHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryAmazonIpiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryAmazonIpiHeaders;
}


export class PostInventoryAmazonIpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
