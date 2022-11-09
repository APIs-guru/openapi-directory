import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasGraphsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasGraphsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasGraphsDeletePathParams;
}


export class ExtrasGraphsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
