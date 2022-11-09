import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryCaryyingCostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryCaryyingCostRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryCaryyingCostHeaders;
}


export class PostInventoryCaryyingCostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
