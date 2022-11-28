import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=correctCname" })
  correctCname?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isResolving" })
  isResolving: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSslEnabled" })
  isSslEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSslOnly" })
  isSslOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUsedForBlogPost" })
  isUsedForBlogPost: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUsedForEmail" })
  isUsedForEmail: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUsedForKnowledge" })
  isUsedForKnowledge: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUsedForLandingPage" })
  isUsedForLandingPage: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUsedForSitePage" })
  isUsedForSitePage: boolean;

  @SpeakeasyMetadata({ data: "json, name=manuallyMarkedAsResolving" })
  manuallyMarkedAsResolving?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryBlogPost" })
  primaryBlogPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryKnowledge" })
  primaryKnowledge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryLandingPage" })
  primaryLandingPage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primarySitePage" })
  primarySitePage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secondaryToDomain" })
  secondaryToDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
