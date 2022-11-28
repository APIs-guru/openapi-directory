import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryMoqHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryMoqRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryMoqHeaders;
}


export class PostInventoryMoqResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
