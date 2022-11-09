import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesCampaignsIdSyndicateFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesCampaignsIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesCampaignsIdSyndicateFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesCampaignsIdSyndicateFormatPathParams;

  @Metadata()
  queryParams: GetResourcesCampaignsIdSyndicateFormatQueryParams;
}


export class GetResourcesCampaignsIdSyndicateFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
