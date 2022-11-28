import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesSourcesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesSourcesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesSourcesJsonQueryParams;
}


export class GetResourcesSourcesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SourceWrapped })
  sourceWrappeds?: shared.SourceWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
