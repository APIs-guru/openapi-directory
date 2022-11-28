import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Member extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio?: string;

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=devto" })
  devto?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedin" })
  linkedin?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pronouns" })
  pronouns?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=tag_list" })
  tagList?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "json, name=tags_to_add" })
  tagsToAdd?: string;

  @SpeakeasyMetadata({ data: "json, name=teammate" })
  teammate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tshirt" })
  tshirt?: string;

  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
