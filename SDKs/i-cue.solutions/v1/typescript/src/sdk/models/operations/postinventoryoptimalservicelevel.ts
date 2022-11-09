import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryOptimalServiceLevelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryOptimalServiceLevelRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryOptimalServiceLevelHeaders;
}


export class PostInventoryOptimalServiceLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
