import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acronym" })
  acronym?: string;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=largeLogoUrl" })
  largeLogoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=smallLogoUrl" })
  smallLogoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
