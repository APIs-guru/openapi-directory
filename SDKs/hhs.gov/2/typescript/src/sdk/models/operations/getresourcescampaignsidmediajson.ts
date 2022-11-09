import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesCampaignsIdMediaJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesCampaignsIdMediaJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesCampaignsIdMediaJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesCampaignsIdMediaJsonPathParams;

  @Metadata()
  queryParams: GetResourcesCampaignsIdMediaJsonQueryParams;
}


export class GetResourcesCampaignsIdMediaJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mediaItemWrapped?: shared.MediaItemWrapped;

  @Metadata()
  statusCode: number;
}
