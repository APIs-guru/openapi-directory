import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOwnershipOwnershipIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" })
  ownershipId: string;
}


export class GetOwnershipOwnershipIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOwnershipOwnershipIdPathParams;
}


export class GetOwnershipOwnershipIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
