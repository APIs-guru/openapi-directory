import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class GetOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOwnershipOwnershipIdPathParams;
}


export class GetOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
