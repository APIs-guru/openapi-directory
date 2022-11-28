import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expires" })
  expires?: number;
}


export class PostOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOwnershipOwnershipIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostOwnershipOwnershipIdQueryParams;
}


export class PostOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
