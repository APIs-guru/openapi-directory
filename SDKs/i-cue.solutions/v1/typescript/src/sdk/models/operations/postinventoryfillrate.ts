import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryFillRateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryFillRateRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryFillRateHeaders;
}


export class PostInventoryFillRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
