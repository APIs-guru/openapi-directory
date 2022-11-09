import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=birthday" })
  birthday?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=devto" })
  devto?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=github" })
  github?: string;

  @Metadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pronouns" })
  pronouns?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=tag_list" })
  tagList?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string;

  @Metadata({ data: "json, name=tags_to_add" })
  tagsToAdd?: string;

  @Metadata({ data: "json, name=teammate" })
  teammate?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=tshirt" })
  tshirt?: string;

  @Metadata({ data: "json, name=twitter" })
  twitter?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
