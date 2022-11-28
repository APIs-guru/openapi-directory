import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryTurnsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryTurnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryTurnsHeaders;
}


export class PostInventoryTurnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
