import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasConfigContextsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasConfigContextsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasConfigContextsDeletePathParams;
}


export class ExtrasConfigContextsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
