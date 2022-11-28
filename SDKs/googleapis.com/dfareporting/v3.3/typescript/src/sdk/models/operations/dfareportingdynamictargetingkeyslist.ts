import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingDynamicTargetingKeysListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingDynamicTargetingKeysListObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectAd = "OBJECT_AD",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT"
}


export class DfareportingDynamicTargetingKeysListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: DfareportingDynamicTargetingKeysListObjectTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingDynamicTargetingKeysListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingDynamicTargetingKeysListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingDynamicTargetingKeysListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingDynamicTargetingKeysListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingDynamicTargetingKeysListSecurity;
}


export class DfareportingDynamicTargetingKeysListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dynamicTargetingKeysListResponse?: shared.DynamicTargetingKeysListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
