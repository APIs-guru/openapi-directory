import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryInventoryTurnoverHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryInventoryTurnoverRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryInventoryTurnoverHeaders;
}


export class PostInventoryInventoryTurnoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
