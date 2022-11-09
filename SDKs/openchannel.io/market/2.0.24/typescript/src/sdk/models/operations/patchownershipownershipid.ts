import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PatchOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expires" })
  expires?: number;
}


export class PatchOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOwnershipOwnershipIdPathParams;

  @Metadata()
  queryParams: PatchOwnershipOwnershipIdQueryParams;
}


export class PatchOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
