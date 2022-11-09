import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryAmazonIpiHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryAmazonIpiRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryAmazonIpiHeaders;
}


export class PostInventoryAmazonIpiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
