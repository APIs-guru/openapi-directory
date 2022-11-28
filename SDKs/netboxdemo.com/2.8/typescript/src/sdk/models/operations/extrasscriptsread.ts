import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasScriptsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ExtrasScriptsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasScriptsReadPathParams;
}


export class ExtrasScriptsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
