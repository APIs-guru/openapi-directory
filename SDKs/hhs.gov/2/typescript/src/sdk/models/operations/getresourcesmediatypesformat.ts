import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaTypesFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesMediaTypesFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaTypesFormatPathParams;
}


export class GetResourcesMediaTypesFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaTypeHolderWrapped })
  mediaTypeHolderWrappeds?: shared.MediaTypeHolderWrapped[];

  @Metadata()
  statusCode: number;
}
