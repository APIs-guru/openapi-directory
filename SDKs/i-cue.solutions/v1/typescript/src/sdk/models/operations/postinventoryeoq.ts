import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryEoqHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryEoqRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryEoqHeaders;
}


export class PostInventoryEoqResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
