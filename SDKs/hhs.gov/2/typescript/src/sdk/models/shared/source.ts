import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=acronym" })
  acronym?: string;

  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=largeLogoUrl" })
  largeLogoUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=smallLogoUrl" })
  smallLogoUrl?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
