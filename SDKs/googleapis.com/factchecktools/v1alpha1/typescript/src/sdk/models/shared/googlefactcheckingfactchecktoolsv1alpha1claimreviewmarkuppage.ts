import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup } from "./googlefactcheckingfactchecktoolsv1alpha1claimreviewmarkup";



// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
/** 
 * Holds one or more instances of `ClaimReview` markup for a webpage.
**/
export class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claimReviewAuthor" })
  claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;

  @SpeakeasyMetadata({ data: "json, name=claimReviewMarkups", elemType: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup })
  claimReviewMarkups?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=publishDate" })
  publishDate?: string;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
