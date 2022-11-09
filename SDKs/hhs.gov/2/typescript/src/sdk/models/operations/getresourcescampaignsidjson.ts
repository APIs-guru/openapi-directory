import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesCampaignsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesCampaignsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesCampaignsIdJsonPathParams;
}


export class GetResourcesCampaignsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  campaignWrapped?: shared.CampaignWrapped;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
