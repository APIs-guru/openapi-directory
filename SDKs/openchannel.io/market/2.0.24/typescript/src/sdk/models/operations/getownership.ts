import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOwnershipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetOwnershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOwnershipQueryParams;
}


export class GetOwnershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
