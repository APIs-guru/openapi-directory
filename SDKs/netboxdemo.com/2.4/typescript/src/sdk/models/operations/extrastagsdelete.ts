import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasTagsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTagsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTagsDeletePathParams;
}


export class ExtrasTagsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
