import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SocialNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;

  @SpeakeasyMetadata({ data: "json, name=social-note-content" })
  socialNoteContent?: string;

  @SpeakeasyMetadata({ data: "json, name=social-note-paragraphId" })
  socialNoteParagraphId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
