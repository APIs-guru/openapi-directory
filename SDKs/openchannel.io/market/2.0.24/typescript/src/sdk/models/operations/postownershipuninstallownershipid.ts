import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostOwnershipUninstallOwnershipIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class PostOwnershipUninstallOwnershipIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cancelOwnership" })
  cancelOwnership?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostOwnershipUninstallOwnershipIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOwnershipUninstallOwnershipIdPathParams;

  @Metadata()
  queryParams: PostOwnershipUninstallOwnershipIdQueryParams;
}


export class PostOwnershipUninstallOwnershipIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
