import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesCampaignsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesCampaignsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesCampaignsJsonQueryParams;
}


export class GetResourcesCampaignsJsonResponse extends SpeakeasyBase {
  @Metadata()
  campaignWrapped?: shared.CampaignWrapped;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
