import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentOrdersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;
}

export enum ContentOrdersListStatusesEnum {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    InProgress = "IN_PROGRESS",
    PendingShipment = "PENDING_SHIPMENT",
    PartiallyShipped = "PARTIALLY_SHIPPED",
    Shipped = "SHIPPED",
    PartiallyDelivered = "PARTIALLY_DELIVERED",
    Delivered = "DELIVERED",
    PartiallyReturned = "PARTIALLY_RETURNED",
    Returned = "RETURNED"
}


export class ContentOrdersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledged" })
  acknowledged?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placedDateEnd" })
  placedDateEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placedDateStart" })
  placedDateStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statuses" })
  statuses?: ContentOrdersListStatusesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ContentOrdersListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentOrdersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentOrdersListPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentOrdersListQueryParams;

  @SpeakeasyMetadata()
  security: ContentOrdersListSecurity;
}


export class ContentOrdersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ordersListResponse?: shared.OrdersListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
