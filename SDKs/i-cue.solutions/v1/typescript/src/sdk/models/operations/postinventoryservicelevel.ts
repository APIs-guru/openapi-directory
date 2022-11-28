import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryServiceLevelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryServiceLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryServiceLevelHeaders;
}


export class PostInventoryServiceLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
