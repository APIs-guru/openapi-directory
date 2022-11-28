import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DoubleclicksearchConversionGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agencyId" })
  agencyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=engineAccountId" })
  engineAccountId: string;
}


export class DoubleclicksearchConversionGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adGroupId" })
  adGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criterionId" })
  criterionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rowCount" })
  rowCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRow" })
  startRow: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DoubleclicksearchConversionGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DoubleclicksearchConversionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DoubleclicksearchConversionGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DoubleclicksearchConversionGetQueryParams;

  @SpeakeasyMetadata()
  security: DoubleclicksearchConversionGetSecurity;
}


export class DoubleclicksearchConversionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversionList?: shared.ConversionList;

  @SpeakeasyMetadata()
  statusCode: number;
}
