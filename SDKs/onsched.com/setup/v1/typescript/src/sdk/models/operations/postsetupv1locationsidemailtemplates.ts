import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdEmailTemplatesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  emailTemplateInputModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  emailTemplateInputModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  emailTemplateInputModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  emailTemplateInputModel3?: Map<string, any>;
}


export class PostSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1LocationsIdEmailTemplatesPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsIdEmailTemplatesRequests;
}


export class PostSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentResult?: shared.ContentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
