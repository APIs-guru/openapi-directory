import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OpenBadgeClassCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=narrative" })
  narrative?: string;
}


export class OpenBadgeClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteria" })
  criteria?: OpenBadgeClassCriteria;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
