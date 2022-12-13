import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
  contactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditContactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ContactEditRequest;
}


export class EditContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactResult?: shared.ContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
