import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaTypesFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesMediaTypesFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaTypesFormatPathParams;
}


export class GetResourcesMediaTypesFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaTypeHolderWrapped })
  mediaTypeHolderWrappeds?: shared.MediaTypeHolderWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
