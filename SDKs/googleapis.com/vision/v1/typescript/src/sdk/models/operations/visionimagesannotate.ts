import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VisionImagesAnnotateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class VisionImagesAnnotateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VisionImagesAnnotateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VisionImagesAnnotateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: VisionImagesAnnotateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: VisionImagesAnnotateSecurityOption2;
}


export class VisionImagesAnnotateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VisionImagesAnnotateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BatchAnnotateImagesRequest;

  @Metadata()
  security: VisionImagesAnnotateSecurity;
}


export class VisionImagesAnnotateResponse extends SpeakeasyBase {
  @Metadata()
  batchAnnotateImagesResponse?: shared.BatchAnnotateImagesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
