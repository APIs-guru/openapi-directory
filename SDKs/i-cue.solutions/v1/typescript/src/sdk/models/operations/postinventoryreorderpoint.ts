import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInventoryReorderPointHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostInventoryReorderPointRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostInventoryReorderPointHeaders;
}


export class PostInventoryReorderPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
