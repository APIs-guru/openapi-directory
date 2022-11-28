import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInventoryOptimalServiceLevelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryOptimalServiceLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostInventoryOptimalServiceLevelHeaders;
}


export class PostInventoryOptimalServiceLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
