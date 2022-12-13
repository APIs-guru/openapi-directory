import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class CreateContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateContactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ContactCreateRequest;
}


export class CreateContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactResult?: shared.ContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
