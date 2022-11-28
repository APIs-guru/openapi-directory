import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RirInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_private" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}


export class Rir extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_private" })
  isPrivate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
