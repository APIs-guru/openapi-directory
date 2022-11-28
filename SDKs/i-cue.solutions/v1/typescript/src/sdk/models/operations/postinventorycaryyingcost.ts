import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryCaryyingCostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryCaryyingCostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryCaryyingCostHeaders;
}


export class PostInventoryCaryyingCostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
