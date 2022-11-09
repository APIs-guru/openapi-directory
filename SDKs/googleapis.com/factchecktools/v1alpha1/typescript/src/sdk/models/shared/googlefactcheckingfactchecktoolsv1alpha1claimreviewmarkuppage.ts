import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup";


// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
/** 
 * Holds one or more instances of `ClaimReview` markup for a webpage.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=claimReviewAuthor" })
  claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;

  @Metadata({ data: "json, name=claimReviewMarkups", elemType: shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup })
  claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pageUrl" })
  pageUrl?: string;

  @Metadata({ data: "json, name=publishDate" })
  publishDate?: string;

  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}
