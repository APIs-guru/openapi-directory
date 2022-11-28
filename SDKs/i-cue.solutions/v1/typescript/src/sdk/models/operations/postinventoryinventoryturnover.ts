import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryInventoryTurnoverHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryInventoryTurnoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryInventoryTurnoverHeaders;
}


export class PostInventoryInventoryTurnoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
