import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesSourcesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesSourcesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesSourcesIdJsonPathParams;
}


export class GetResourcesSourcesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SourceWrapped })
  sourceWrappeds?: shared.SourceWrapped[];

  @Metadata()
  statusCode: number;
}
