import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdEmailTemplatesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  emailTemplateInputModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  emailTemplateInputModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  emailTemplateInputModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  emailTemplateInputModel3?: Map<string, any>;
}


export class PostSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1LocationsIdEmailTemplatesPathParams;

  @Metadata()
  request?: PostSetupV1LocationsIdEmailTemplatesRequests;
}


export class PostSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentResult?: shared.ContentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
