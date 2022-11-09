import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostReviewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoApprove" })
  autoApprove?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=headline" })
  headline: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mustOwnApp" })
  mustOwnApp?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostReviewsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostReviewsQueryParams;
}


export class PostReviewsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
