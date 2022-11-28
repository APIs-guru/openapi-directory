import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostToolsCreateDicomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostToolsCreateDicomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postToolsCreateDicom200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
