import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryLtdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryLtdRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryLtdHeaders;
}


export class PostInventoryLtdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
