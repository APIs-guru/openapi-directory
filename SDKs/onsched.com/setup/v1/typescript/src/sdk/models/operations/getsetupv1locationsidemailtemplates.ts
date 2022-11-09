import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsIdEmailTemplatesPathParams;
}


export class GetSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  emailTemplateListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
