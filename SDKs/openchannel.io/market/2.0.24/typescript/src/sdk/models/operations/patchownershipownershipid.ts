import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PatchOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expires" })
  expires?: number;
}


export class PatchOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchOwnershipOwnershipIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchOwnershipOwnershipIdQueryParams;
}


export class PatchOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
