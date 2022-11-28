import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1LocationsIdEmailTemplatesPathParams;
}


export class GetSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailTemplateListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
