import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SocialNotesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=pageId" })
  pageId?: string;

  @Metadata({ data: "json, name=personId" })
  personId?: string;

  @Metadata({ data: "json, name=social-note-content" })
  socialNoteContent?: string;

  @Metadata({ data: "json, name=social-note-paragraphId" })
  socialNoteParagraphId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
