import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
  contactId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContactPathParams;
}


export class GetContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contactResult?: shared.ContactResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
