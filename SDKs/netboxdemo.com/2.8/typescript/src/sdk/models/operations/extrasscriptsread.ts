import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExtrasScriptsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasScriptsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasScriptsReadPathParams;
}


export class ExtrasScriptsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
