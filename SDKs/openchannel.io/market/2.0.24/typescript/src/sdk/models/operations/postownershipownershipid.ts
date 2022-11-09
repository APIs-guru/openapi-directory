import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expires" })
  expires?: number;
}


export class PostOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOwnershipOwnershipIdPathParams;

  @Metadata()
  queryParams: PostOwnershipOwnershipIdQueryParams;
}


export class PostOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
