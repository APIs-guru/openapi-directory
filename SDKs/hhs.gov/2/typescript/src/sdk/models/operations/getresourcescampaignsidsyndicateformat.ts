import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesCampaignsIdSyndicateFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesCampaignsIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesCampaignsIdSyndicateFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesCampaignsIdSyndicateFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesCampaignsIdSyndicateFormatQueryParams;
}


export class GetResourcesCampaignsIdSyndicateFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
