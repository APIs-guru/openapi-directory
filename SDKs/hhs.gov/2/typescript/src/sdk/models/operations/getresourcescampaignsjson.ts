import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesCampaignsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesCampaignsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesCampaignsJsonQueryParams;
}


export class GetResourcesCampaignsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaignWrapped?: shared.CampaignWrapped;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
