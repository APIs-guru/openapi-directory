import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostReviewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoApprove" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=headline" })
  headline: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mustOwnApp" })
  mustOwnApp?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostReviewsQueryParams;
}


export class PostReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
