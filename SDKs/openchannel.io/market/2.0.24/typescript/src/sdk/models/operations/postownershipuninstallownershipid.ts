import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOwnershipUninstallOwnershipIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostOwnershipUninstallOwnershipIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cancelOwnership" })
  cancelOwnership?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostOwnershipUninstallOwnershipIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOwnershipUninstallOwnershipIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostOwnershipUninstallOwnershipIdQueryParams;
}


export class PostOwnershipUninstallOwnershipIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
