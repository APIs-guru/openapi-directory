import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpenBadgeClassCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=narrative" })
  narrative?: string;
}


export class OpenBadgeClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteria" })
  criteria?: OpenBadgeClassCriteria;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
