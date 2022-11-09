import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesSourcesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesSourcesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesSourcesJsonQueryParams;
}


export class GetResourcesSourcesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SourceWrapped })
  sourceWrappeds?: shared.SourceWrapped[];

  @Metadata()
  statusCode: number;
}
