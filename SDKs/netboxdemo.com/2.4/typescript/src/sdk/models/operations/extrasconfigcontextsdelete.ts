import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasConfigContextsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasConfigContextsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasConfigContextsDeletePathParams;
}


export class ExtrasConfigContextsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
