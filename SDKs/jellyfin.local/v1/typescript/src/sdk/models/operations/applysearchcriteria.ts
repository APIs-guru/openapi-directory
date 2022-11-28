import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApplySearchCriteriaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class ApplySearchCriteriaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" })
  replaceAllImages?: boolean;
}


export class ApplySearchCriteriaRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  remoteSearchResult?: shared.RemoteSearchResult;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  remoteSearchResult1?: shared.RemoteSearchResult;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  remoteSearchResult2?: shared.RemoteSearchResult;
}


export class ApplySearchCriteriaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class ApplySearchCriteriaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplySearchCriteriaPathParams;

  @SpeakeasyMetadata()
  queryParams: ApplySearchCriteriaQueryParams;

  @SpeakeasyMetadata()
  request: ApplySearchCriteriaRequests;

  @SpeakeasyMetadata()
  security: ApplySearchCriteriaSecurity;
}


export class ApplySearchCriteriaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
