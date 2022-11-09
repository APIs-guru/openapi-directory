import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostToolsCreateDicomRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateDicomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postToolsCreateDicom200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
