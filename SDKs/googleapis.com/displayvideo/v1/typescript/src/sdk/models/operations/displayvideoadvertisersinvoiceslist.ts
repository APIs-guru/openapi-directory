import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisplayvideoAdvertisersInvoicesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;
}

export enum DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum {
    LoiSapinInvoiceTypeUnspecified = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED",
    LoiSapinInvoiceTypeMedia = "LOI_SAPIN_INVOICE_TYPE_MEDIA",
    LoiSapinInvoiceTypePlatform = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"
}


export class DisplayvideoAdvertisersInvoicesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=issueMonth" })
  issueMonth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loiSapinInvoiceType" })
  loiSapinInvoiceType?: DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DisplayvideoAdvertisersInvoicesListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersInvoicesListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersInvoicesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DisplayvideoAdvertisersInvoicesListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DisplayvideoAdvertisersInvoicesListSecurityOption2;
}


export class DisplayvideoAdvertisersInvoicesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisplayvideoAdvertisersInvoicesListPathParams;

  @SpeakeasyMetadata()
  queryParams: DisplayvideoAdvertisersInvoicesListQueryParams;

  @SpeakeasyMetadata()
  security: DisplayvideoAdvertisersInvoicesListSecurity;
}


export class DisplayvideoAdvertisersInvoicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInvoicesResponse?: shared.ListInvoicesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
