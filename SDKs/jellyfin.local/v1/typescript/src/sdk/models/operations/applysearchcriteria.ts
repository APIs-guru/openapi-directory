import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApplySearchCriteriaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class ApplySearchCriteriaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" })
  replaceAllImages?: boolean;
}


export class ApplySearchCriteriaRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  remoteSearchResult?: shared.RemoteSearchResult;

  @Metadata({ data: "request, media_type=application/json" })
  remoteSearchResult1?: shared.RemoteSearchResult;

  @Metadata({ data: "request, media_type=text/json" })
  remoteSearchResult2?: shared.RemoteSearchResult;
}


export class ApplySearchCriteriaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ApplySearchCriteriaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplySearchCriteriaPathParams;

  @Metadata()
  queryParams: ApplySearchCriteriaQueryParams;

  @Metadata()
  request: ApplySearchCriteriaRequests;

  @Metadata()
  security: ApplySearchCriteriaSecurity;
}


export class ApplySearchCriteriaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
