import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryTurnsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryTurnsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryTurnsHeaders;
}


export class PostInventoryTurnsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
