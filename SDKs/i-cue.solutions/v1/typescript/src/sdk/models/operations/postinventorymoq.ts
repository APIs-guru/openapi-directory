import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryMoqHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryMoqRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryMoqHeaders;
}


export class PostInventoryMoqResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
