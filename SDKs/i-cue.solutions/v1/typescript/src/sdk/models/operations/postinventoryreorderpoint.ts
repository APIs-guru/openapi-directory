import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryReorderPointHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryReorderPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryReorderPointHeaders;
}


export class PostInventoryReorderPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
