import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryServiceLevelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryServiceLevelRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryServiceLevelHeaders;
}


export class PostInventoryServiceLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
