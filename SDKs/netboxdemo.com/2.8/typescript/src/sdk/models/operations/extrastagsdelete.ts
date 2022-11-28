import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasTagsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTagsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTagsDeletePathParams;
}


export class ExtrasTagsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
